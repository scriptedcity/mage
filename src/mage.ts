import { Mage, Spell, Sequence } from "./mage.types";
import { createSpell } from "./mage.spell";
import { createSynth } from "./mage.synth";
import { createSampler } from "./mage.sampler";
import { createStep } from "./mage.step";
import { createSequence } from "./mage.sequence";
import { getRandomInt, RNG } from "./mage.rng";
import {
  WORK_INTERVAL,
  CAST_DELAY_CORRECTION,
  NOTE_NUMBERS,
} from "./mage.const";

/**
 * `createMage` is a function to generate a `Mage` object, which encapsulates the behavior of a mage,
 * including casting spells, keeping track of time (beats and cycles), and controlling the mage's tempo.
 *
 * @remarks
 * This function is exported from the module.
 *
 * @param props - An object with the following optional properties:
 *  - `tempo` - The tempo in beats per minute (default is 128).
 *  - `beatsPerCycle` - The number of beats in a cycle, where changes to spells will be applied (default is 8).
 *  - `randomSeed` - The seed for the random number generator (default is 88675123).
 *
 * @returns An object of type `Mage` with the following properties and methods:
 *  - `audioContext` - The AudioContext for the mage.
 *  - `analyser` - The AnalyserNode for the mage.
 *  - `tempo` - The tempo in beats per minute.
 *  - `beatsPerCycle` - The number of beats in a cycle.
 *  - `beatLength` - The length of each beat in seconds.
 *  - `spells` - A Map object to manage the mage's spells.
 *  - `beatCount` - The current beat count.
 *  - `start` - A function to start the mage.
 *  - `stop` - A function to stop the mage.
 *  - `getTiming` - An object with the current cycle count (`cycles`) and the current beat count in the cycle (`beats`).
 *  - `createSampler` - A function to create a sampler.
 *  - `createSynth` - A function to create a synth.
 *  - `getRandomInt` - A function to get a random integer.
 *  - `cast` - A function to create a spell and schedule it. It takes a `name` and a `props` object with the following properties:
 *    - `source` - The sound source for the spell.
 *    - `sequence` - A function to create a sequence of notes.
 *    - `duration` - The duration of the spell in beats.
 *  - `suppress` - A function to suppress a spell. It takes a `name` as an argument.
 *  - `useMetronome` - A function to enable or disable a metronome sound.
 * @eventProperty tick - A tick event that is dispatched on each beat.
 */

export const createMage = ({
  tempo = 128,
  beatsPerCycle = 8,
  randomSeed = 88675123,
}): Mage => {
  if (tempo <= 1 || beatsPerCycle <= 1) {
    throw new Error("Tempo and beatsPerCycle must be greater than 1.");
  }
  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
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
      // dispatch tick event
      audioContext.dispatchEvent(tickEvent);

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

  const rng = getRandomInt(RNG(randomSeed));

  const mage = {
    audioContext,
    analyser,
    tempo,
    beatsPerCycle,
    beatLength,
    spells,
    beatCount,
    start,
    stop,
    getRandomInt: rng,
    createSequence: createSequence(rng),
  } as unknown as Mage;

  //add functions
  mage.getTiming = () => {
    return {
      cycles: Math.floor(beatCount / beatsPerCycle),
      beats: (beatCount % beatsPerCycle) + 1,
    };
  };
  mage.createSampler = createSampler(mage);
  mage.createSynth = createSynth(mage);
  mage.cast = (name, props) => {
    const delay =
      beatLength * (beatsPerCycle - (beatCount % beatsPerCycle)) * 1000 -
      CAST_DELAY_CORRECTION;
    if (props == null) {
      window.setTimeout(() => {
        spells.delete(name);
        // dispatch spellChange event
        audioContext.dispatchEvent(spellChangedEvent);
      }, delay);
      return;
    }
    const spell = createSpell(mage as Mage)(props);
    window.setTimeout(() => {
      spells.set(name, spell);
      // dispatch spellChange event
      audioContext.dispatchEvent(spellChangedEvent);
    }, delay);
  };
  mage.suppress = (name) => {
    mage.cast(name, null);
  };
  mage.useMetronome = (enabled = true) => {
    if (enabled) {
      const sound = () =>
        createSynth(mage as Mage)([
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
      (mage as Mage).cast("metronome", {
        sound,
        sequence,
        duration,
      });
    } else {
      (mage as Mage).cast("metronome", null);
    }
  };

  // custom event
  const tickEvent = new CustomEvent("tick", {
    detail: {
      getTiming: mage.getTiming,
    },
  });

  const spellChangedEvent = new CustomEvent("spellChanged", {
    detail: {
      spells: mage.spells,
    },
  });
  return mage;
};
