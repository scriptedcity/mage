declare const _default: ({ tempo, beatsParCycle }: {
    tempo?: number | undefined;
    beatsParCycle?: number | undefined;
}) => import("./mage.types").Mage;
export default _default;
export { createSequence } from "./mage.sequence";
export { createSynth } from "./mage.synth";
export { createSampler } from "./mage.sampler";
export { createScale } from "./mage.scale";
export { getRandomInt, RNG } from "./mage.utils";
export * as constant from "./mage.const";
