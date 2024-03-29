/**
 * `CAST_DELAY_CORRECTION` is a constant value that's used to correct
 * the scheduling delay when casting (i.e., playing) a musical spell (i.e., a sequence of sounds).
 * The value represents a delay in milliseconds.
 */
export declare const CAST_DELAY_CORRECTION = 10;
/**
 * `WORK_INTERVAL` is a constant that defines a standard duration (in seconds) for a work interval.
 */
export declare const WORK_INTERVAL = 0.1;
/**
 * `MASTER_TUNE` is a constant that defines the base frequency (in Hz) for the A4 note, often used as a tuning reference in music.
 */
export declare const MASTER_TUNE = 440;
/**
 * `FREQUENCY` is an array that represents the frequencies (in Hz) of all the 128 MIDI note numbers.
 * It's calculated based on the 12-TET (Twelve-tone equal temperament) tuning system, using the `MASTER_TUNE` constant as the frequency of the A4 note.
 */
export declare const FREQUENCY: number[];
/**
 * `NOTE_NUMBERS` is an object that maps the names of musical notes in various octaves to their corresponding MIDI note numbers.
 * The note names include all the naturals (A to G), as well as sharps (notated as 's') and flats (notated as 'b'), spanning from C0 to G9.
 */
export declare const NOTE_NUMBERS: {
    C0: number;
    Cs0: number;
    Db0: number;
    D0: number;
    Ds0: number;
    Eb0: number;
    E0: number;
    Es0: number;
    Fb0: number;
    F0: number;
    Fs0: number;
    Gb0: number;
    G0: number;
    Gs0: number;
    Ab0: number;
    A0: number;
    As0: number;
    Bb0: number;
    B0: number;
    Bs0: number;
    Cb1: number;
    C1: number;
    Cs1: number;
    Db1: number;
    D1: number;
    Ds1: number;
    Eb1: number;
    E1: number;
    Es1: number;
    Fb1: number;
    F1: number;
    Fs1: number;
    Gb1: number;
    G1: number;
    Gs1: number;
    Ab1: number;
    A1: number;
    As1: number;
    Bb1: number;
    B1: number;
    Bs1: number;
    Cb2: number;
    C2: number;
    Cs2: number;
    Db2: number;
    D2: number;
    Ds2: number;
    Eb2: number;
    E2: number;
    Es2: number;
    Fb2: number;
    F2: number;
    Fs2: number;
    Gb2: number;
    G2: number;
    Gs2: number;
    Ab2: number;
    A2: number;
    As2: number;
    Bb2: number;
    B2: number;
    Bs2: number;
    Cb3: number;
    C3: number;
    Cs3: number;
    Db3: number;
    D3: number;
    Ds3: number;
    Eb3: number;
    E3: number;
    Es3: number;
    Fb3: number;
    F3: number;
    Fs3: number;
    Gb3: number;
    G3: number;
    Gs3: number;
    Ab3: number;
    A3: number;
    As3: number;
    Bb3: number;
    B3: number;
    Bs3: number;
    Cb4: number;
    C4: number;
    Cs4: number;
    Db4: number;
    D4: number;
    Ds4: number;
    Eb4: number;
    E4: number;
    Es4: number;
    Fb4: number;
    F4: number;
    Fs4: number;
    Gb4: number;
    G4: number;
    Gs4: number;
    Ab4: number;
    A4: number;
    As4: number;
    Bb4: number;
    B4: number;
    Bs4: number;
    Cb5: number;
    C5: number;
    Cs5: number;
    Db5: number;
    D5: number;
    Ds5: number;
    Eb5: number;
    E5: number;
    Es5: number;
    Fb5: number;
    F5: number;
    Fs5: number;
    Gb5: number;
    G5: number;
    Gs5: number;
    Ab5: number;
    A5: number;
    As5: number;
    Bb5: number;
    B5: number;
    Bs5: number;
    Cb6: number;
    C6: number;
    Cs6: number;
    Db6: number;
    D6: number;
    Ds6: number;
    Eb6: number;
    E6: number;
    Es6: number;
    Fb6: number;
    F6: number;
    Fs6: number;
    Gb6: number;
    G6: number;
    Gs6: number;
    Ab6: number;
    A6: number;
    As6: number;
    Bb6: number;
    B6: number;
    Bs6: number;
    Cb7: number;
    C7: number;
    Cs7: number;
    Db7: number;
    D7: number;
    Ds7: number;
    Eb7: number;
    E7: number;
    Es7: number;
    Fb7: number;
    F7: number;
    Fs7: number;
    Gb7: number;
    G7: number;
    Gs7: number;
    Ab7: number;
    A7: number;
    As7: number;
    Bb7: number;
    B7: number;
    Bs7: number;
    Cb8: number;
    C8: number;
    Cs8: number;
    Db8: number;
    D8: number;
    Ds8: number;
    Eb8: number;
    E8: number;
    Es8: number;
    Fb8: number;
    F8: number;
    Fs8: number;
    Gb8: number;
    G8: number;
    Gs8: number;
    Ab8: number;
    A8: number;
    As8: number;
    Bb8: number;
    B8: number;
    Bs8: number;
    Cb9: number;
    C9: number;
    Cs9: number;
    Db9: number;
    D9: number;
    Ds9: number;
    Eb9: number;
    E9: number;
    Es9: number;
    Fb9: number;
    F9: number;
    Fs9: number;
    Gb9: number;
    G9: number;
};
/**
 * `INTERVALS` is an object that maps various musical interval and scale names to their corresponding pitch class sets.
 * These sets are represented as arrays of integers, each integer being the distance in semitones from the root note of the interval or scale.
 * For example, the major triad ('maj') is represented as [0, 4, 7], meaning that it consists of the root note, a note 4 semitones above the root, and a note 7 semitones above the root.
 */
export declare const INTERVALS: {
    maj: number[];
    min: number[];
    sus4: number[];
    sus2: number[];
    aug: number[];
    dim: number[];
    six: number[];
    min7: number[];
    maj7: number[];
    octave: number[];
    add9: number[];
    add11: number[];
    add13: number[];
    major: number[];
    minor: number[];
    harmonicMin: number[];
    melodicMin: number[];
    ionian: number[];
    dorian: number[];
    phrygian: number[];
    lydian: number[];
    mixolydian: number[];
    aeolian: number[];
    locrian: number[];
    wholetone: number[];
    majorPentatonic: number[];
    minorPentatonic: number[];
    diminished: number[];
    combinationDiminished: number[];
    chromatic: number[];
};
