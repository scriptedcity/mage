/**
 * Create a scale from a root note and intervals
 *
 * @param rootNoteNumber - MIDI note number
 * @param chordIntervals - intervals of chord
 * @returns number[]
 */
export declare const createScale: (rootNoteNumber: number, ...chordIntervals: number[][]) => number[];
/**
 * Get root notes from scales
 *
 * @param scales - scales
 * @returns number[]
 */
export declare const getRootNotes: (scales: number[][]) => number[];
