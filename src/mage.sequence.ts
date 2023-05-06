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
