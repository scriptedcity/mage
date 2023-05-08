declare const _default: ({ tempo, beatsParCycle, randomSeed, }: {
    tempo?: number | undefined;
    beatsParCycle?: number | undefined;
    randomSeed?: number | undefined;
}) => import("./mage.types").Mage;
export default _default;
export { createSequence } from "./mage.sequence";
export { createStep } from "./mage.step";
export { createScale, getRootNotes } from "./mage.scale";
export { getRandomInt, RNG } from "./mage.utils";
export { NOTE_NUMBERS, INTERVALS } from "./mage.const";
export * from "./mage.types";
