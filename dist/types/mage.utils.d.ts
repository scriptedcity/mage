/**
 * Calculates the duration of a beat in seconds.
 * @param tempo - Tempo in beats per minute.
 * @param beats - Number of beats.
 * @returns Duration of beat in seconds.
 */
export declare const calcBeatDuration: (tempo: number, beats?: number) => number;
/**
 * Generates random number.
 * @param seed - Seed.
 * @returns Random number generator.
 * @see https://en.wikipedia.org/wiki/Xorshift
 */
export declare function RNG(seed?: number): Generator<number, void, unknown>;
/**
 * Generates random integer.
 * @param generator - Random number generator.
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns Random integer between min and max.
 */
export declare const getRandomInt: (generator: Generator) => (min?: number, max?: number) => number;
