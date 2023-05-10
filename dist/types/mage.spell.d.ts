import { Mage, Sound, Sequence } from "./mage.types";
/**
 * Create spell.
 * Spell has a sequence of notes, sound source and its duration.
 * All notes in sequence will be played in the equal interval.
 *
 * @param mage - Mage object.
 * @param props - Properties to create spell.
 * - source - Sound source.
 * - sequence - Function to create sequence of notes.
 *   - The function will be called each cycle with mage timing and loop count.
 * - duration - Duration of spell in beat.
 * @returns functions to create spell.
 * - isActivated - Whether spell is activated.
 *   If true, spell will be scheduled.
 *
 * - nextScheduleTime - Next schedule time.
 * - currentStep - Current step of sequence.
 * - schedule - Schedule notes.
 */
declare const createSpell: (mage: Mage) => (props: {
    sound: Sound;
    sequence: Sequence;
    duration: number;
}) => {
    isActivated: boolean;
    nextScheduleTime: number;
    readonly currentStep: number;
    schedule: (currentTime: number, beatLength: number) => void;
    sound: Sound;
    sequence: Sequence;
    duration: number;
};
export default createSpell;
