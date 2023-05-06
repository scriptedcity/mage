import { Steps } from "./mage.types";
export declare const createSequence: (rng: (min: number, max: number) => number) => (scale: number[]) => (pattern: string, duration?: number, volume?: number, ignoreMarks?: boolean) => Steps;
