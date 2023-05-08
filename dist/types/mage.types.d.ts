export type Timing = {
    cycles: number;
    beats: number;
    loopCount: number;
};
export type Mage = {
    audioContext: AudioContext;
    tempo: number;
    beatsParCycle: number;
    beatLength: number;
    readonly timing: Pick<Timing, "cycles" | "beats">;
    cast: (name: string, props: {
        source: Source;
        sequence: Sequence;
        duration: number;
    } | null) => void;
    start: () => void;
    stop: () => void;
    spells: Map<string, Spell>;
    beatCount: number;
    createSampler: (sourceUrls: string[]) => Promise<Source>;
    createSynth: (oscillators?: {
        type: OscillatorType;
        detune: number;
        semitone: number;
    }[]) => Source;
    getRandomInt: (min: number, max: number) => number;
    useMetronome: (enabled: boolean) => void;
};
export type Spell = {
    isActivated: boolean;
    nextScheduleTime: number;
    readonly currentStep: number;
    schedule: (currentTime: number, beatLength: number) => void;
    source: Source;
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
