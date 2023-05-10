import { Mage, Sound, Sequence } from "./mage.types";
/**
 * `createSpell` is a function that creates a Spell object.
 * A Spell object represents a piece of music that can be activated, scheduled, and contains its own sound and sequence.
 *
 * @param mage - The Mage object which the Spell will be bound to.
 * @param props - Properties to create Spell.
 * - `sound` - A Sound object which defines the sound of the Spell.
 * - `sequence` - A Sequence function that generates a sequence of Steps.
 * - `duration` - The duration of the Spell in beats.
 *
 * @returns A Spell object that has the following properties and methods:
 * - `isActivated` - A getter and setter to check and set if the Spell is activated.
 * - `nextScheduleTime` - A getter and setter to get and set the next schedule time of the Spell.
 * - `currentStep` - A getter to get the current step index of the Spell.
 * - `schedule` - A method to schedule the Spell.
 * - `sound` - A Sound object which defines the sound of the Spell.
 * - `sequence` - A Sequence function that generates a sequence of Steps.
 * - `duration` - The duration of the Spell in beats.
 */
export declare const createSpell: (mage: Mage) => (props: {
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
