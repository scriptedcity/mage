import { OscillatorType, Source } from "./mage.types";
export declare const createSynth: (audioContext: AudioContext) => (oscillators?: {
    type: OscillatorType;
    detune: number;
    semitone: number;
}[]) => Source;
