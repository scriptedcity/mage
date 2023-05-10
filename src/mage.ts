import { Mage, Spell, Sequence } from "./mage.types";
import createSpell from "./mage.spell";
import { createSynth } from "./mage.synth";
import { createSampler } from "./mage.sampler";
import { createStep } from "./mage.step";
import { getRandomInt, RNG } from "./mage.utils";
import { WORK_INTERVAL, NOTE_NUMBERS } from "./mage.const";

/**
 * Create mage.
 *
 * @param props - Properties to create mage.
 *   - tempo - Tempo in BPM.
 *   - beatsParCycle - How many beats in a cycle.
 *     - All change for spells will be applied at the beginning of cycle.
 * @returns Mage object.
 * - audioContext - Audio context.
 * - tempo - Tempo in BPM.
 * - beatsParCycle - How many beats in a cycle.
 * - beatLength - Length of beat in second.
 * - spells - Map of spells.
 * - beatCount - Current beat count.
 * - start - Start mage.
 * - stop - Stop mage.
 * - timing - Current timing.
 *   - cycles - Current cycle count.
 *   - beats - Current beat count in cycle.
 * - createSampler - Create sampler.
 * - createSynth - Create synth.
 * - getRandomInt - Get random integer.
 * - cast - Create spell and schedule it.
 *   - name - Name of spell.
 *   - props - Properties to create spell.
 *     - source - Sound source.
 *     - sequence - Function to create sequence of notes.
 *     - duration - Duration of spell in beat.
 * - useMetronome - Enable metrognome sound.
 */

export const createMage = ({
  tempo = 128,
  beatsPerCycle = 8,
  randomSeed = 88675123,
}): Mage => {
  const audioContext = new AudioContext();
  const beatLength = 60 / tempo;
  let beatCount = 0;

  // manage spells
  const spells = new Map<string, Spell>();

  let nextScheduleTime = 0;
  const schedule = () => {
    while (audioContext.currentTime + WORK_INTERVAL > nextScheduleTime) {
      if (beatCount % beatsPerCycle === 0) {
        console.log("---------------------");
        //activate spell
        spells.forEach((spell) => {
          if (!spell.isActivated) {
            spell.isActivated = true;
            spell.nextScheduleTime = nextScheduleTime;
          }
        });
      }
      console.log({
        beatCount,
      });
      beatCount++;
      nextScheduleTime += beatLength;
    }

    spells.forEach((spell) => {
      spell.schedule(audioContext.currentTime, beatLength);
    });
  };
  // transport
  let timer: number;
  const start = () => {
    timer = window.setInterval(schedule, WORK_INTERVAL * 1000);
  };
  const stop = () => clearInterval(timer);
  start();

  return {
    audioContext,
    tempo,
    beatsPerCycle,
    beatLength,
    spells,
    beatCount,
    start,
    stop,
    createSampler: createSampler(audioContext),
    createSynth: createSynth(audioContext),
    getRandomInt: getRandomInt(RNG(randomSeed)),
    get timing() {
      return {
        cycles: Math.floor(beatCount / beatsPerCycle),
        beats: beatCount % beatsPerCycle,
      };
    },
    cast(name, props) {
      const delay =
        beatLength * (beatsPerCycle - (beatCount % beatsPerCycle)) * 1000 - 50;
      if (props == null) {
        window.setTimeout(() => {
          spells.delete(name);
        }, delay);
        return;
      }
      const spell = createSpell(this)(props);
      window.setTimeout(() => {
        spells.set(name, spell);
      }, delay);
    },
    useMetronome(enabled = true) {
      if (enabled) {
        const sound = () =>
          createSynth(this.audioContext)([
            {
              type: "square",
              detune: 0,
              semitone: 0,
            },
          ]);
        const sequence: Sequence = ({ beats }) => {
          return [
            createStep(beats === 0 ? NOTE_NUMBERS.A6 : NOTE_NUMBERS.A5, 1, 0.2),
          ];
        };
        const duration = 1;
        this.cast("metronome", {
          sound,
          sequence,
          duration,
        });
      } else {
        this.cast("metronome", null);
      }
    },
  };
};
