import { Mage } from "./mage.types";
/**
 * Create mage.
 *
 * @param props - Properties to create mage.
 *   - tempo - Tempo in BPM.
 *   - beatsParCycle - How many beats in a cycle.
 *     - All change for spells will be applied at the beginning of cycle.
 * @returns Mage object.
 * - audioContext - Audio context.
 * - tempo - Tempo in BPM.
 * - beatsParCycle - How many beats in a cycle.
 * - beatLength - Length of beat in second.
 * - spells - Map of spells.
 * - beatCount - Current beat count.
 * - start - Start mage.
 * - stop - Stop mage.
 * - timing - Current timing.
 *   - cycles - Current cycle count.
 *   - beats - Current beat count in cycle.
 * - cast - Create spell and schedule it.
 *   - name - Name of spell.
 *   - props - Properties to create spell.
 *     - source - Sound source.
 *     - sequence - Function to create sequence of notes.
 *     - duration - Duration of spell in beat.
 * - useMetrognome - Enable metrognome sound.
 */
export declare const createMage: ({ tempo, beatsParCycle }: {
    tempo?: number | undefined;
    beatsParCycle?: number | undefined;
}) => Mage;
