import * as mage from "./mage";
import * as constant from "./mage.const";

export default mage.createMage;
export { createSequence } from "./mage.sequence";
export { createStep } from "./mage.step";
export { createSynth } from "./mage.synth";
export { createSampler } from "./mage.sampler";
export { createScale, getRootNotes } from "./mage.scale";
export { getRandomInt, RNG } from "./mage.utils";
export { constant };
export * from "./mage.types";
