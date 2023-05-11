export type Timing = { cycles: number; beats: number; loopCount: number };

export type Mage = {
  audioContext: AudioContext;
  tempo: number;
  beatsPerCycle: number;
  beatLength: number;
  readonly timing: Pick<Timing, "cycles" | "beats">;
  cast: (
    name: string,
    props: {
      sound: Sound;
      sequence: Sequence;
      duration: number;
    } | null
  ) => void;
  start: () => void;
  stop: () => void;
  spells: Map<string, Spell>;
  beatCount: number;
  getRandomInt: (min: number, max: number) => number;
  createSampler: (sourceUrls: string[]) => Promise<Source>;
  createSynth: (
    oscillators?: { type: OscillatorType; detune: number; semitone: number }[]
  ) => Source;
  createSequence: (
    scale: number[]
  ) => (
    pattern: string,
    duration?: number,
    volume?: number,
    ignoreMarks?: boolean
  ) => Steps;
  useMetronome: (enabled: boolean) => void;
};

export type Spell = {
  isActivated: boolean;
  nextScheduleTime: number;
  readonly currentStep: number;
  schedule: (currentTime: number, beatLength: number) => void;
  sound: Sound;
  sequence: Sequence;
  duration: number;
};

export type Step = {
  noteNumber: number | number[];
  volume: number;
  duration: number;
};

export type Steps = (Step | Steps | null)[];

export type Sequence = (timing: Timing) => Steps;

export type Envelope = {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
};

export type Sound = (timing: Timing) => Source;

export type Source = {
  play: (props: {
    noteNumber: number;
    volume: number;
    duration: number;
    startTime: number;
    adsr?: Envelope;
  }) => void;
};

export type OscillatorType = "sine" | "square" | "sawtooth" | "triangle";
