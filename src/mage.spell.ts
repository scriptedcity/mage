import { Mage, Source, Sequence, Steps, Step } from "./mage.types";
import { WORK_INTERVAL } from "./mage.const";

const createSpell =
  (mage: Mage) =>
  (props: { source: Source; sequence: Sequence; duration: number }) => {
    let { source, sequence, duration } = props;
    let _isActivated = false;
    let _nextScheduleTime = 0;
    let _currentStep = 0;
    let loopCount = 0;

    const flatSteps = (steps: Steps, value: number) => {
      let result: { step: Step | null; value: number }[] = [];
      steps.forEach((step) => {
        if (step instanceof Array) {
          result.push(...flatSteps(step, value / step.length));
        } else {
          result.push({ step, value });
        }
      });
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
