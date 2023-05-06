import { Mage, Source, Sequence } from "./mage.types";
declare const createSpell: (mage: Mage) => (props: {
    source: Source;
    sequence: Sequence;
    duration: number;
}) => {
    isActivated: boolean;
    nextScheduleTime: number;
    readonly currentStep: number;
    schedule: (currentTime: number, beatLength: number) => void;
    source: Source;
    sequence: Sequence;
    duration: number;
};
export default createSpell;
