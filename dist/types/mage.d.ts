import { Mage } from "./mage.types";
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
 *  - `tempo` - The tempo in beats per minute.
 *  - `beatsPerCycle` - The number of beats in a cycle.
 *  - `beatLength` - The length of each beat in seconds.
 *  - `spells` - A Map object to manage the mage's spells.
 *  - `beatCount` - The current beat count.
 *  - `start` - A function to start the mage.
 *  - `stop` - A function to stop the mage.
 *  - `timing` - An object with the current cycle count (`cycles`) and the current beat count in the cycle (`beats`).
 *  - `createSampler` - A function to create a sampler.
 *  - `createSynth` - A function to create a synth.
 *  - `getRandomInt` - A function to get a random integer.
 *  - `cast` - A function to create a spell and schedule it. It takes a `name` and a `props` object with the following properties:
 *    - `source` - The sound source for the spell.
 *    - `sequence` - A function to create a sequence of notes.
 *    - `duration` - The duration of the spell in beats.
 *  - `useMetronome` - A function to enable or disable a metronome sound.
 */
export declare const createMage: ({ tempo, beatsPerCycle, randomSeed, }: {
    tempo?: number | undefined;
    beatsPerCycle?: number | undefined;
    randomSeed?: number | undefined;
}) => Mage;
