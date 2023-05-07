import * as constant from "./mage.const";
declare const _default: ({ tempo, beatsParCycle }: {
    tempo?: number | undefined;
    beatsParCycle?: number | undefined;
}) => import("./mage.types").Mage;
export default _default;
export { createSequence } from "./mage.sequence";
export { createStep } from "./mage.step";
export { createSynth } from "./mage.synth";
export { createSampler } from "./mage.sampler";
export { createScale, getRootNotes } from "./mage.scale";
export { getRandomInt, RNG } from "./mage.utils";
export { constant };
export * from "./mage.types";
