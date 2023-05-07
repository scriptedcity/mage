import { Envelope } from "./mage.types";
/**
 * Create GainNode with ADSR envelope
 * @param audioContext - AudioContext
 * @returns GainNode
 */
export declare const createGainNode: (audioContext: AudioContext) => (startTime: number, baseGain: number, duration: number, adsr: Envelope) => GainNode;
