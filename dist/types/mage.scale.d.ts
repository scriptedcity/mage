/**
 * `createScale` is a function that generates a musical scale based on a root note and a series of chord intervals.
 *
 * @param rootNoteNumber - The root note number of the scale.
 * @param chordIntervals - A rest parameter that accepts an array of arrays, each of which represents a chord interval. Each interval is added to the root note to generate a note of the scale.
 *
 * @returns An array of note numbers representing the generated musical scale.
 */
export declare const createScale: (rootNoteNumber: number, ...chordIntervals: number[][]) => number[];
/**
 * `getRootNotes` is a function that extracts the root notes from a series of scales.
 *
 * @param scales - An array of scales. Each scale is represented as an array of note numbers.
 *
 * @returns An array of root note numbers, one from each provided scale. The root note of a scale is the first note in its array.
 */
export declare const getRootNotes: (scales: number[][]) => number[];
