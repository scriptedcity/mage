import { Source } from "./mage.types";
/**
 * Create sampler
 *
 * @param audioContext - AudioContext
 * @param sourceUrls - Array of sound source URLs
 * @returns Source
 */
export declare const createSampler: (audioContext: AudioContext) => (sourceUrls: string[]) => Promise<Source>;
