import { Mage, Sound, Sequence, Steps, Step } from "./mage.types";
import { WORK_INTERVAL } from "./mage.const";

/**
 * `createSpell` is a function that creates a Spell object.
 * A Spell object represents a piece of music that can be activated, scheduled, and contains its own sound and sequence.
 *
 * @param mage - The Mage object which the Spell will be bound to.
 * @param props - Properties to create Spell.
 * - `sound` - A Sound object which defines the sound of the Spell.
 * - `sequence` - A Sequence function that generates a sequence of Steps.
 * - `duration` - The duration of the Spell in beats.
 *
 * @returns A Spell object that has the following properties and methods:
 * - `isActivated` - A getter and setter to check and set if the Spell is activated.
 * - `nextScheduleTime` - A getter and setter to get and set the next schedule time of the Spell.
 * - `currentStep` - A getter to get the current step index of the Spell.
 * - `schedule` - A method to schedule the Spell.
 * - `sound` - A Sound object which defines the sound of the Spell.
 * - `sequence` - A Sequence function that generates a sequence of Steps.
 * - `duration` - The duration of the Spell in beats.
 */
export const createSpell =
  (mage: Mage) =>
  (props: { sound: Sound; sequence: Sequence; duration: number }) => {
    const { sound, sequence, duration } = props;
    const analyser = mage.audioContext.createAnalyser();
    let _isActivated = false;
    let _nextScheduleTime = 0;
    let _currentStep = 0;
    let loopCount = 0;

    const flatSteps = (steps: Steps, value: number) => {
      const result: { step: Step | null; value: number }[] = [];
      try {
        steps.forEach((step) => {
          if (step instanceof Array) {
            result.push(...flatSteps(step, value / step.length));
          } else {
            result.push({ step, value });
          }
        });
      } catch (e) {
        console.error("Failed to flatten steps:", e);
        throw e;
      }
      return result;
    };
    const tempSteps = sequence({ ...mage.getTiming(), loopCount });
    let steps = flatSteps(tempSteps, 1 / tempSteps.length);
    // schedule notes
    const schedule = (currentTime: number, beatLength: number) => {
      const spellLength = beatLength * duration;
      if (!_isActivated) return;

      while (currentTime + WORK_INTERVAL > _nextScheduleTime) {
        const { step, value } = steps[_currentStep];
        if (step) {
          [step.noteNumber].flat().forEach((noteNumber) => {
            sound({ ...mage.getTiming(), loopCount }).play(
              {
                noteNumber,
                startTime: _nextScheduleTime,
                volume: step.volume ?? 1,
                duration: spellLength * value * step.duration,
              },
              [mage.analyser, analyser]
            );
          });
        }
        _nextScheduleTime += spellLength * value;

        // dispatch tick event
        mage.audioContext.dispatchEvent(tickEvent);

        // schedule next run
        _currentStep++;
        if (_currentStep >= steps.length) {
          _currentStep = 0;
          loopCount++;
          steps = flatSteps(
            sequence({ ...mage.getTiming(), loopCount }),
            1 / tempSteps.length
          );
        }
      }
    };

    // custom event
    const getTiming = () => {
      return {
        cycles: loopCount,
        beats: _currentStep + 1,
      };
    };

    const tickEvent = new CustomEvent("tick", {
      detail: {
        getTiming,
      },
    });

    return {
      get isActivated() {
        return _isActivated;
      },
      set isActivated(value: boolean) {
        _isActivated = value;
      },
      get nextScheduleTime() {
        return _nextScheduleTime;
      },
      set nextScheduleTime(value: number) {
        _nextScheduleTime = value;
      },
      get currentStep() {
        return _currentStep;
      },
      analyser,
      schedule,
      sound,
      sequence,
      duration,
    };
  };
