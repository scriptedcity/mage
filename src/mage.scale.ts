/**
 * Create a scale from a root note and intervals
 *
 * @param rootNoteNumber - MIDI note number
 * @param chordIntervals - intervals of chord
 * @returns number[]
 */
export const createScale = (
  rootNoteNumber: number,
  ...chordIntervals: number[][]
) => {
  const intervals = new Set(chordIntervals.flat().flat());
  const scale: number[] = [];
  intervals.forEach((interval) => {
    scale.push(rootNoteNumber + interval);
  });
  return scale;
};

/**
 * Get root notes from scales
 *
 * @param scales - scales
 * @returns number[]
 */
export const getRootNotes = (scales: number[][]) => {
  return scales.map((scale) => scale[0]);
};
