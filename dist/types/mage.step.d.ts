import { Step } from "./mage.types";
/**
 * Create a step object.
 *
 * @param noteNumber - Note number(s) to play.
 *  - If it is an array, it will be played in parallel.
 * @param volume - Volume of note.
 * @param duration - Duration of note.
 * @returns Step object.
 * @example
 * ```ts
 * // play note 60 with volume 0.5 and duration 0.5
 * const step = createStep(60, 0.5, 0.5);
 * ```
 * ```ts
 * // play note 60, 62, 64 at the same time with volume 0.5 and duration 0.5
 * const step = createStep([60, 62, 64], 0.5, 0.5);
 * ```
 */
export declare const createStep: (noteNumber: number | number[], volume?: number, duration?: number) => Step;
