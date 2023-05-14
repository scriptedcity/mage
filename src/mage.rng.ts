/**
 * `RNG` is a generator function that produces a sequence of random numbers based on a given seed using
 * the xorshift algorithm.
 *
 * @param seed - The seed for the random number generator (default is 88675123).
 *
 * @returns A sequence of random numbers between 0 and 1.
 */
export function* RNG(seed = 88675123) {
  let x = 123456789;
  let y = 362436069;
  let z = 521288629;
  let w = seed;
  while (true) {
    const t = x ^ (x << 11);
    x = y;
    y = z;
    z = w;
    w = w ^ (w >>> 19) ^ (t ^ (t >>> 8));
    yield (w + 2147483647) / 4294967296;
  }
}

/**
 * `getRandomInt` is a function that returns a function for generating random integers within a specified range
 * using a given random number generator.
 *
 * @param generator - The generator to use for random number generation.
 *
 * @returns A function that takes two parameters, `min` and `max`, and generates a random integer within that range.
 */
export const getRandomInt =
  (generator: Generator) =>
  (min = 0, max = 9) => {
    return Math.floor(generator.next().value * (max + 1 - min)) + min;
  };
