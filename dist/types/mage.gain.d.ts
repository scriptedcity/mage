import { Envelope } from "./mage.types";
/**
 * `createGainNode` is a function that creates an audio GainNode with an optional ADSR envelope.
 *
 * @param audioContext - The AudioContext in which the GainNode operates.
 *
 * @returns A function that takes the following parameters:
 *  - `startTime` - The time at which the GainNode starts operating in seconds.
 *  - `baseGain` - The base gain level (0-1).
 *  - `duration` - The duration for which the GainNode operates in seconds.
 *  - `adsr` - An ADSR envelope object, which can have the following properties:
 *    - `attack` - The attack time in milliseconds.
 *    - `decay` - The decay time in milliseconds.
 *    - `sustain` - The sustain level (0-1).
 *    - `release` - The release time in milliseconds.
 *  The returned function creates a GainNode and schedules the ADSR envelope to be applied using the `linearRampToValueAtTime` method.
 *  If the release time is greater than the duration, the gain will ramp down to zero at the end of the release period.
 *
 * @returns The GainNode object.
 */
export declare const createGainNode: (audioContext: AudioContext) => (startTime: number, baseGain: number, duration: number, adsr: Envelope) => GainNode;
