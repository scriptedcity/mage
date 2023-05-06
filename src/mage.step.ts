import { Step } from "./mage.types";

export const createStep = (
  noteNumber: number | number[],
  volume: number = 1,
  duration: number = 1
): Step => {
  return { noteNumber, volume, duration };
};
