import { Steps } from "./mage.types";
/**
 * Create sequence from pattern.
 * Pattern is a string of hexadecimal numbers, and some special characters.
 * - 0-9, a-f: note
 * - .: repeat last note
 * - ?: random note - The note will be selected randomly from the all scale notes.
 * - -: tie - The duration of the previous note will be extended.
 * - []: tuplet - All notes in the same bracket will be played in the equal duration.
 * - Curly bracket: chord - All notes in the same bracket are played at the same time.
 *
 * @param rng - random number generator
 * @param scale - scale
 * @param pattern - pattern
 * @returns Steps
 */
export declare const createSequence: (rng: (min: number, max: number) => number) => (scale: number[]) => (pattern: string, duration?: number, volume?: number, ignoreMarks?: boolean) => Steps;
