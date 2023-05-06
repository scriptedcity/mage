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

export const getRootNotes = (scales: number[][]) => {
  return scales.map((scale) => scale[0]);
};
