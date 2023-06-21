import { Source, Mage } from "./mage.types";
/**
 * `createSampler` is a function that creates a sampler source, which can be used to play back audio files.
 *
 * @param mage - The Mage object.
 * @param sourceUrls - An array of URLs of audio files to be loaded into the sampler.
 *
 * @returns A function that takes an array of sourceUrls, which are URLs of audio files to be loaded into the sampler.
 *          The returned function creates a Source object with a `play` method that takes the following properties:
 *          - `noteNumber` - The index of the audio file in the sourceUrls array to play.
 *          - `volume` - The volume of the note (0-1).
 *          - `startTime` - The time at which to start playing the note in seconds.
 *          - `duration` - The duration for which to play the note in seconds.
 *          - `adsr` - An optional ADSR envelope object, which can have the following properties:
 *            - `attack` - The attack time in seconds (default is 0).
 *            - `decay` - The decay time in seconds (default is 0).
 *            - `sustain` - The sustain level (0-1) (default is 1).
 *            - `release` - The release time in seconds (default is 0).
 *          The `play` method creates the necessary gain and buffer source nodes, connects them, and schedules the note to play.
 *          If the release time is greater than the duration, the gain will ramp down to zero at the end of the release period.
 *
 * @throws If any of the fetch requests fail, the corresponding promise is rejected and the status of the Promise.allSettled promise becomes 'rejected'.
 *         The rejected promise will return `null` for the audio buffer in the array of audio buffers.
 */
export declare const createSampler: (mage: Mage) => (sourceUrls: string[]) => Promise<Source>;
