import { Mage, Spell, Sequence } from "./mage.types";
import createSpell from "./mage.spell";
import { createSynth } from "./mage.synth";
import { createStep } from "./mage.step";
import { WORK_INTERVAL, NoteNumbers } from "./mage.const";

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
 * - cast - Create spell and schedule it.
 *   - name - Name of spell.
 *   - props - Properties to create spell.
 *     - source - Sound source.
 *     - sequence - Function to create sequence of notes.
 *     - duration - Duration of spell in beat.
 * - useMetrognome - Enable metrognome sound.
 */

export const createMage = ({ tempo = 128, beatsParCycle = 8 }): Mage => {
  const audioContext = new AudioContext();
  const beatLength = 60 / tempo;
  let beatCount = 0;

  // manage spells
  const spells = new Map<string, Spell>();

  let nextScheduleTime = 0;
  const schedule = () => {
    while (audioContext.currentTime + WORK_INTERVAL > nextScheduleTime) {
      if (beatCount % beatsParCycle === 0) {
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
    beatsParCycle,
    beatLength,
    spells,
    beatCount,
    start,
    stop,
    get timing() {
      return {
        cycles: Math.floor(beatCount / beatsParCycle),
        beats: beatCount % beatsParCycle,
      };
    },
    cast(name, props) {
      const delay =
        beatLength * (beatsParCycle - (beatCount % beatsParCycle)) * 1000 - 50;
      console.log({ delay, beat: beatCount % beatsParCycle });
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
    useMetrognome(enabled = true) {
      if (enabled) {
        const source = createSynth(this.audioContext)([
          {
            type: "square",
            detune: 0,
            semitone: 0,
          },
        ]);
        const sequence: Sequence = ({ beats }) => {
          return [
            createStep(beats === 0 ? NoteNumbers.A6 : NoteNumbers.A5, 1, 0.2),
          ];
        };
        const duration = 1;
        console.log({
          source,
          sequence,
          duration,
        });
        this.cast("metrognome", {
          source,
          sequence,
          duration,
        });
      } else {
        this.cast("metrognome", null);
      }
    },
  };
};
