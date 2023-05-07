import { OscillatorType, Source } from "./mage.types";
/**
 * Create synth.
 * Create sound source with oscillators.
 * @param audioContext - Audio context.
 * @param oscillators - Oscillators.
 * - type - Oscillator type.
 * - detune - Cents of detune.
 * - semitone - Semitones. for example, 12 is an octave.
 * @returns Sound source.
 */
export declare const createSynth: (audioContext: AudioContext) => (oscillators?: {
    type: OscillatorType;
    detune: number;
    semitone: number;
}[]) => Source;
