import { Step } from "./mage.types";

export const createStep = (
  noteNumber: number | number[],
  volume = 1,
  duration = 1
): Step => {
  return { noteNumber, volume, duration };
};
