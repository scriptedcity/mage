import { OscillatorType, Source, Mage } from "./mage.types";
/**
 * `createSynth` is a function that creates a synthesizer source, which can be used to generate different sounds
 * based on a set of oscillators.
 *
 * @param mage - The Mage object.
 * @param oscillators - An optional array of oscillator configurations.
 *                    Each oscillator configuration has the following properties:
 *                    - `type` - The type of the oscillator. It can be "sine", "square", "sawtooth", or "triangle".
 *                    - `detune` - The detune amount for the oscillator in cents (default is 0).
 *                    - `semitone` - The semitone shift for the oscillator (default is 0).
 *                    If no oscillators are provided, a single sawtooth oscillator with no detune and no semitone shift is used.
 *
 * @returns The returned function creates a Source object with a `play` method that takes the following properties:
 *          - `noteNumber` - The MIDI note number to play.
 *          - `volume` - The volume of the note (0-1).
 *          - `startTime` - The time at which to start playing the note in seconds.
 *          - `duration` - The duration for which to play the note in seconds.
 *          - `adsr` - An optional ADSR envelope object, which can have the following properties:
 *            - `attack` - The attack time in seconds (default is 0).
 *            - `decay` - The decay time in seconds (default is 0).
 *            - `sustain` - The sustain level (0-1) (default is 1).
 *            - `release` - The release time in seconds (default is 0).
 *          The `play` method creates the necessary gain and oscillator nodes, connects them, and schedules the note to play.
 */
export declare const createSynth: (mage: Mage) => (oscillators?: {
    type: OscillatorType;
    detune: number;
    semitone: number;
}[]) => Source;
