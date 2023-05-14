/**
 * `WORK_INTERVAL` is a constant that defines a standard duration (in seconds) for a work interval.
 */
export const WORK_INTERVAL = 0.1;

/**
 * `MASTER_TUNE` is a constant that defines the base frequency (in Hz) for the A4 note, often used as a tuning reference in music.
 */
export const MASTER_TUNE = 440;
/**
 * `FREQUENCY` is an array that represents the frequencies (in Hz) of all the 128 MIDI note numbers.
 * It's calculated based on the 12-TET (Twelve-tone equal temperament) tuning system, using the `MASTER_TUNE` constant as the frequency of the A4 note.
 */
export const FREQUENCY: number[] = Array(128)
  .fill(undefined)
  .map((_, i) => MASTER_TUNE * Math.pow(2, (i - 69) / 12));

/**
 * `NOTE_NUMBERS` is an object that maps the names of musical notes in various octaves to their corresponding MIDI note numbers.
 * The note names include all the naturals (A to G), as well as sharps (notated as 's') and flats (notated as 'b'), spanning from C0 to G9.
 */
export const NOTE_NUMBERS = {
  C0: 12,
  Cs0: 13,
  Db0: 13,
  D0: 14,
  Ds0: 15,
  Eb0: 15,
  E0: 16,
  Es0: 17,
  Fb0: 16,
  F0: 17,
  Fs0: 18,
  Gb0: 18,
  G0: 19,
  Gs0: 20,
  Ab0: 20,
  A0: 21,
  As0: 22,
  Bb0: 22,
  B0: 23,
  Bs0: 24,
  Cb1: 23,
  C1: 24,
  Cs1: 25,
  Db1: 25,
  D1: 26,
  Ds1: 27,
  Eb1: 27,
  E1: 28,
  Es1: 29,
  Fb1: 28,
  F1: 29,
  Fs1: 30,
  Gb1: 30,
  G1: 31,
  Gs1: 32,
  Ab1: 32,
  A1: 33,
  As1: 34,
  Bb1: 34,
  B1: 35,
  Bs1: 36,
  Cb2: 35,
  C2: 36,
  Cs2: 37,
  Db2: 37,
  D2: 38,
  Ds2: 39,
  Eb2: 39,
  E2: 40,
  Es2: 41,
  Fb2: 40,
  F2: 41,
  Fs2: 42,
  Gb2: 42,
  G2: 43,
  Gs2: 44,
  Ab2: 44,
  A2: 45,
  As2: 46,
  Bb2: 46,
  B2: 47,
  Bs2: 48,
  Cb3: 47,
  C3: 48,
  Cs3: 49,
  Db3: 49,
  D3: 50,
  Ds3: 51,
  Eb3: 51,
  E3: 52,
  Es3: 53,
  Fb3: 52,
  F3: 53,
  Fs3: 54,
  Gb3: 54,
  G3: 55,
  Gs3: 56,
  Ab3: 56,
  A3: 57,
  As3: 58,
  Bb3: 58,
  B3: 59,
  Bs3: 60,
  Cb4: 59,
  C4: 60,
  Cs4: 61,
  Db4: 61,
  D4: 62,
  Ds4: 63,
  Eb4: 63,
  E4: 64,
  Es4: 65,
  Fb4: 64,
  F4: 65,
  Fs4: 66,
  Gb4: 66,
  G4: 67,
  Gs4: 68,
  Ab4: 68,
  A4: 69,
  As4: 70,
  Bb4: 70,
  B4: 71,
  Bs4: 72,
  Cb5: 71,
  C5: 72,
  Cs5: 73,
  Db5: 73,
  D5: 74,
  Ds5: 75,
  Eb5: 75,
  E5: 76,
  Es5: 77,
  Fb5: 76,
  F5: 77,
  Fs5: 78,
  Gb5: 78,
  G5: 79,
  Gs5: 80,
  Ab5: 80,
  A5: 81,
  As5: 82,
  Bb5: 82,
  B5: 83,
  Bs5: 84,
  Cb6: 83,
  C6: 84,
  Cs6: 85,
  Db6: 85,
  D6: 86,
  Ds6: 87,
  Eb6: 87,
  E6: 88,
  Es6: 89,
  Fb6: 88,
  F6: 89,
  Fs6: 90,
  Gb6: 90,
  G6: 91,
  Gs6: 92,
  Ab6: 92,
  A6: 93,
  As6: 94,
  Bb6: 94,
  B6: 95,
  Bs6: 96,
  Cb7: 95,
  C7: 96,
  Cs7: 97,
  Db7: 97,
  D7: 98,
  Ds7: 99,
  Eb7: 99,
  E7: 100,
  Es7: 101,
  Fb7: 100,
  F7: 101,
  Fs7: 102,
  Gb7: 102,
  G7: 103,
  Gs7: 104,
  Ab7: 104,
  A7: 105,
  As7: 106,
  Bb7: 106,
  B7: 107,
  Bs7: 108,
  Cb8: 107,
  C8: 108,
  Cs8: 109,
  Db8: 109,
  D8: 110,
  Ds8: 111,
  Eb8: 111,
  E8: 112,
  Es8: 113,
  Fb8: 112,
  F8: 113,
  Fs8: 114,
  Gb8: 114,
  G8: 115,
  Gs8: 116,
  Ab8: 116,
  A8: 117,
  As8: 118,
  Bb8: 118,
  B8: 119,
  Bs8: 120,
  Cb9: 119,
  C9: 120,
  Cs9: 121,
  Db9: 121,
  D9: 122,
  Ds9: 123,
  Eb9: 123,
  E9: 124,
  Es9: 125,
  Fb9: 124,
  F9: 125,
  Fs9: 126,
  Gb9: 126,
  G9: 127,
};

/**
 * `INTERVALS` is an object that maps various musical interval and scale names to their corresponding pitch class sets.
 * These sets are represented as arrays of integers, each integer being the distance in semitones from the root note of the interval or scale.
 * For example, the major triad ('maj') is represented as [0, 4, 7], meaning that it consists of the root note, a note 4 semitones above the root, and a note 7 semitones above the root.
 */
export const INTERVALS = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  sus4: [0, 5, 7],
  sus2: [0, 2, 7],
  aug: [0, 4, 8],
  dim: [0, 3, 6],
  six: [9],
  min7: [10],
  maj7: [11],
  octave: [12],
  add9: [14],
  add11: [17],
  add13: [19],
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  harmonicMin: [0, 2, 3, 5, 7, 8, 11],
  melodicMin: [0, 2, 3, 5, 7, 9, 11],
  ionian: [0, 2, 4, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  wholetone: [0, 2, 4, 6, 8, 10],
  majorPentatonic: [0, 2, 4, 7, 9],
  minorPentatonic: [0, 3, 5, 7, 10],
  diminished: [0, 2, 3, 5, 6, 8, 9, 11],
  combinationDiminished: [0, 1, 3, 4, 6, 7, 9, 10],
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};
