import { Mage, Source, Sequence, Steps, Step } from "./mage.types";
import { WORK_INTERVAL } from "./mage.const";

/**
 * Create spell.
 * Spell has a sequence of notes, sound source and its duration.
 * All notes in sequence will be played in the equal interval.
 *
 * @param mage - Mage object.
 * @param props - Properties to create spell.
 * - source - Sound source.
 * - sequence - Function to create sequence of notes.
 *   - The function will be called each cycle with mage timing and loop count.
 * - duration - Duration of spell in beat.
 * @returns functions to create spell.
 * - isActivated - Whether spell is activated.
 *   If true, spell will be scheduled.
 *
 * - nextScheduleTime - Next schedule time.
 * - currentStep - Current step of sequence.
 * - schedule - Schedule notes.
 */
const createSpell =
  (mage: Mage) =>
  (props: { source: Source; sequence: Sequence; duration: number }) => {
    const { source, sequence, duration } = props;
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
        console.log(e);
      }
      return result;
    };
    const tempSteps = sequence({ ...mage.timing, loopCount });
    let steps = flatSteps(tempSteps, 1 / tempSteps.length);
    // schedule notes
    const schedule = (currentTime: number, beatLength: number) => {
      const spellLength = beatLength * duration;
      if (!_isActivated) return;

      while (currentTime + WORK_INTERVAL > _nextScheduleTime) {
        const { step, value } = steps[_currentStep];
        if (step) {
          [step.noteNumber].flat().forEach((noteNumber) => {
            source.play({
              noteNumber,
              startTime: _nextScheduleTime,
              volume: step.volume ?? 1,
              duration: spellLength * value * step.duration,
            });
          });
        }
        _nextScheduleTime += spellLength * value;

        // schedule next run
        _currentStep++;
        if (_currentStep >= steps.length) {
          _currentStep = 0;
          loopCount++;
          steps = flatSteps(
            sequence({ ...mage.timing, loopCount }),
            1 / tempSteps.length
          );
        }
      }
    };

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
      schedule,
      source,
      sequence,
      duration,
    };
  };
export default createSpell;
