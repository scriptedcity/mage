import { Source } from "./mage.types";
export declare const createSampler: (audioContext: AudioContext) => (sourceUrls: string[]) => Promise<Source>;
