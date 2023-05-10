declare const _default: ({ tempo, beatsPerCycle, randomSeed, }: {
    tempo?: number | undefined;
    beatsPerCycle?: number | undefined;
    randomSeed?: number | undefined;
}) => import("./mage.types").Mage;
export default _default;
export { createSequence } from "./mage.sequence";
export { createStep } from "./mage.step";
export { createScale, getRootNotes } from "./mage.scale";
export { NOTE_NUMBERS, INTERVALS } from "./mage.const";
export * from "./mage.types";
