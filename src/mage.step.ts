import { Step } from "./mage.types";

/**
 * `createStep` is a function that creates a Step object.
 * A Step object represents a musical note or chord with a specific volume and duration.
 *
 * @param noteNumber - The MIDI note number or an array of MIDI note numbers. If an array is provided, it represents a chord.
 * @param volume - The volume of the note or chord (0-1). Default is 1.
 * @param duration - The duration of the note or chord in beats. Default is 1.
 *
 * @returns A Step object that has the following properties:
 * - `noteNumber` - The MIDI note number or an array of MIDI note numbers.
 * - `volume` - The volume of the note or chord.
 * - `duration` - The duration of the note or chord in beats.
 */
export const createStep = (
  noteNumber: number | number[],
  volume = 1,
  duration = 1
): Step => {
  return { noteNumber, volume, duration };
};
