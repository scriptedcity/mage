import { Envelope } from "./mage.types";
export declare const createGainNode: (audioContext: AudioContext) => (startTime: number, baseGain: number, duration: number, adsr: Envelope) => GainNode;
