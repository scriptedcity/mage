import { Steps } from "./mage.types";
/**
 * `createSequence` is a function that generates a sequence of musical Steps based on a given pattern.
 *
 * @param rng - A function that generates a random number between a specified range (min, max).
 * @returns A higher order function that:
 * - Accepts a `scale`, an array of note numbers representing a musical scale.
 * - Returns another function that:
 *   - Accepts a `pattern`, a string that represents the sequence of notes and musical expressions.
 *   - `duration` (optional), the duration of each note in the pattern. Default is 1.
 *   - `volume` (optional), the volume of each note in the pattern. Default is 1.
 *   - `ignoreMarks` (optional), a boolean flag to determine whether to ignore special characters in the pattern. Default is false.
 *   - Returns a `Steps` array, each element of which corresponds to a Step in the sequence.
 *
 * The `pattern` string is a series of characters, each representing a musical operation:
 * - A hexadecimal number (0-F) represents a note from the scale.
 * - A space ' ' represents a rest.
 * - A period '.' represents a repeat of the previous note.
 * - A question mark '?' represents a random note from the scale.
 * - A dash '-' represents a tie, which extends the duration of the previous note.
 * - Square brackets '[]' represent a tuplet, a group of notes that are played in the duration normally occupied by a different number.
 * - Curly braces '{}' represent a chord, a group of notes that are played simultaneously.
 */
export declare const createSequence: (rng: (min: number, max: number) => number) => (scale: number[]) => (pattern: string, duration?: number, volume?: number, ignoreMarks?: boolean) => Steps;
