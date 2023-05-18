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
/**
 * `invertScale` function takes a musical scale (represented as an array of MIDI note numbers)
 * and inverts it by moving the first or last note up or down by one octave,
 * depending on the value of `repetition`.
 *
 * @param scale - An array of numbers representing a musical scale in MIDI note numbers.
 * @param repetition - A number indicating how many times to invert the scale.
 * If `repetition` is positive, the first note of the scale is moved up by one octave
 * for each repetition. If `repetition` is negative, the last note of the scale
 * is moved down by one octave for each repetition.
 *
 * @returns A new array representing the inverted scale. If `repetition` is 0 or if the
 * input scale is empty, the original scale is returned.
 *
 * @throws Will throw an error if the scale becomes empty during the inversion process.
 */
export declare const invertScale: (scale: number[], repetition: number) => number[];
