# Mage
*Making music, generated by JavaScript codes.*

🧙 Mage is Web Audio API-based library for musical looping.

### ***🚧This library is still under development🚧***

💣 Breaking changes will occur without any notices.

## Usage

```shell
npm install @millstones/mage
```

```js
/* import modules */
import createMage, {
  createScale,
  NOTE_NUMBERS,
  INTERVALS,
} from "@millstones/mage";

/* Create mage object */
const mage = createMage({ tempo: 128, beatsPerCycle: 4, randomSeed: 1234 });

/* Mage provides some functions */
const { createSequence, createSynth, createSampler } = mage;

/* Declare chord progressions as array */
const chords = [
  createScale(NOTE_NUMBERS.C4, INTERVALS.maj, INTERVALS.maj7),
  createScale(NOTE_NUMBERS.B3, INTERVALS.min, INTERVALS.min7),
  createScale(NOTE_NUMBERS.E4, INTERVALS.min, INTERVALS.min7),
  createScale(NOTE_NUMBERS.D4, INTERVALS.min, INTERVALS.min7),
];

/* Sequence must be a function with the following arguments */
const sequence = ({ cycles, beats, loopCount }) => {
  const seq = createSequence(chords[loopCount % 4])(
    "{0123} .  .  .  .  . ",
    1,
    0.2
  );
  return seq;
};

/* Create synth with an array of oscillators */
const synth = createSynth([
  { type: "square", detune: 0, semitone: 0 },
  { type: "sawtooth", detune: 0, semitone: 0 },
]);

/* cast method will combine sound and sequence */
mage.cast("chord", {
  sound: ({ cycles, beats, loopCount }) => synth,
  sequence,
  duration: 4,
});

/* Declare sapmler with an array of urls */
const drumSampler = await createSampler([
  "https://yourhost/kick.mp3",
  "https://yourhost/clap.mp3",
  "https://yourhost/snare.mp3",
  "https://yourhost/hihat.mp3",
]);

const drumSeq = ({ cycles, beats, loopCount }) => {
  const seq = createSequence([0, 1, 2, 3])("0[3.]{01}[3?]", 1);
  return seq;
};

mage.cast("drums", {
  sound: ({ cycles, beats, loopCount }) => drumSampler,
  sequence: drumSeq,
  duration: 2,
});

/* Start scheduling notes */
mage.start();

/* Mage stops scheduling notes */
mage.stop();
```

## Example

🔎　See at [CodeSandbox](https://codesandbox.io/s/mage-sample-zevxpz?from-embed)

## Documents

📖　[TypeDoc](https://scriptedcity.github.io/mage/)

## License

⚖️　MIT
