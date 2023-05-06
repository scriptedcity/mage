/**
 * Calculates the duration of a beat in seconds.
 * @param tempo - Tempo in beats per minute.
 * @param beats - Number of beats.
 * @returns Duration of beat in seconds.
 */
export const calcBeatDuration = (tempo: number, beats = 1) => {
  return (60 / tempo) * beats;
};

/**
 * Generates random number.
 * @param seed - Seed.
 * @returns Random number generator.
 * @see https://en.wikipedia.org/wiki/Xorshift
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
 * Generates random integer.
 * @param generator - Random number generator.
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns Random integer between min and max.
 */
export const getRandomInt =
  (generator: Generator) =>
  (min = 0, max = 9) => {
    return Math.floor(generator.next().value * (max + 1 - min)) + min;
  };
