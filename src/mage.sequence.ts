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
export const createSequence =
  (rng: (min: number, max: number) => number) =>
  (scale: number[]) =>
  (pattern: string, duration = 1, volume = 1, ignoreMarks = false): Steps => {
    const seq: Steps = [];
    const ptn = pattern.split("");
    for (let i = 0; i < ptn.length; i++) {
      const op = ptn[i];
      const parsed = parseInt(op, 16);
      // note
      if (!isNaN(parsed)) {
        seq.push({ noteNumber: scale[parsed], volume, duration });
        continue;
      }
      if (ignoreMarks) {
        continue;
      }
      // rest
      if (op == " ") {
        seq.push(null);
        continue;
      }
      // repeat
      if (op == ".") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /*@ts-ignore*/
        const lastNoteIndex = seq.findLastIndex((note) => note != null);
        if (lastNoteIndex >= 0) {
          seq.push(seq[lastNoteIndex]);
        } else {
          seq.push(null);
        }
        continue;
      }
      // random
      if (op == "?") {
        const randNote = rng(0, scale.length - 1);
        seq.push({ noteNumber: scale[randNote], volume, duration });
        continue;
      }
      // tie
      if (op == "-") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /*@ts-ignore*/
        const lastNoteIndex = seq.findLastIndex((note) => note != null);
        if (lastNoteIndex >= 0) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          /*@ts-ignore*/
          seq[lastNoteIndex].duration += duration;
        }
        seq.push(null);
        continue;
      }
      // tuplet
      if (op == "[") {
        const bracketIndex = findCloseBracketIndex("[", pattern, i);
        if (bracketIndex >= 0) {
          const innerSeq = createSequence(rng)(scale)(
            ptn.slice(i + 1, bracketIndex).join(""),
            duration / (bracketIndex - i - 1),
            volume
          );
          seq.push(innerSeq);
          i = bracketIndex;
        }
        continue;
      }
      // chord
      if (op == "{") {
        const bracketIndex = findCloseBracketIndex("{", pattern, i);
        if (bracketIndex >= 0) {
          const noteNumber = createSequence(rng)(scale)(
            ptn.slice(i + 1, bracketIndex).join(""),
            duration,
            volume,
            true
          )
            .map((note) => {
              if (note == null) {
                return null;
              }
              if (Array.isArray(note)) {
                return null;
              }
              return note?.noteNumber;
            })
            .filter((note) => note != null) as number | number[];
          seq.push({ noteNumber, volume, duration });
          i = bracketIndex;
        }
        continue;
      }
    }
    return seq;
  };

const bracketPairs = { "[": "]", "{": "}" };

/**
 * `findCloseBracketIndex` is a function that finds the index of the closing bracket for a given opening bracket in a string.
 *
 * @param bracket - The opening bracket character to find the corresponding closing bracket for.
 * @param pattern - The string in which to search for the closing bracket.
 * @param startIndex - The index at which to start searching for the closing bracket.
 *
 * @returns The index of the closing bracket in the string. If no closing bracket is found, it returns -1.
 */
const findCloseBracketIndex = (
  bracket: keyof typeof bracketPairs,
  pattern: string,
  startIndex: number
) => {
  let nest = 0;
  for (let i = startIndex; i < pattern.length; i++) {
    if (pattern[i] == bracket) {
      nest++;
    }
    if (pattern[i] == bracketPairs[bracket]) {
      nest--;
      if (nest <= 0) {
        return i;
      }
    }
  }
  return -1;
};
