/**
 * `RNG` is a generator function that produces a sequence of random numbers based on a given seed using
 * the xorshift algorithm.
 *
 * @param seed - The seed for the random number generator (default is 88675123).
 *
 * @returns A sequence of random numbers between 0 and 1.
 */
export declare function RNG(seed?: number): Generator<number, void, unknown>;
/**
 * `getRandomInt` is a function that returns a function for generating random integers within a specified range
 * using a given random number generator.
 *
 * @param generator - The generator to use for random number generation.
 *
 * @returns A function that takes two parameters, `min` and `max`, and generates a random integer within that range.
 */
export declare const getRandomInt: (generator: Generator) => (min?: number, max?: number) => number;
