import * as mage from "./mage";

export default mage.createMage;
export { createSequence } from "./mage.sequence";
export { createStep } from "./mage.step";
export { createSynth } from "./mage.synth";
export { createSampler } from "./mage.sampler";
export { createScale, getRootNotes } from "./mage.scale";
export { getRandomInt, RNG } from "./mage.utils";
export { NOTE_NUMBERS, INTERVALS } from "./mage.const";
export * from "./mage.types";
