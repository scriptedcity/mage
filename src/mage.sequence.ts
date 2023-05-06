import { Steps } from "./mage.types";

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
        /*@ts-ignore*/
        const lastNoteIndex = seq.findLastIndex((note) => note != null);
        if (lastNoteIndex >= 0) {
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
