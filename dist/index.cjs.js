"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RNG: () => RNG,
  constant: () => mage_const_exports,
  createSampler: () => createSampler,
  createScale: () => createScale,
  createSequence: () => createSequence,
  createStep: () => createStep,
  createSynth: () => createSynth,
  default: () => src_default,
  getRandomInt: () => getRandomInt,
  getRootNotes: () => getRootNotes
});
module.exports = __toCommonJS(src_exports);

// src/mage.const.ts
var mage_const_exports = {};
__export(mage_const_exports, {
  FREQUENCY: () => FREQUENCY,
  Intervals: () => Intervals,
  MASTER_TUNE: () => MASTER_TUNE,
  NoteNumbers: () => NoteNumbers,
  WORK_INTERVAL: () => WORK_INTERVAL
});
var WORK_INTERVAL = 0.1;
var MASTER_TUNE = 440;
var FREQUENCY = Array(128).fill(void 0).map((_, i) => MASTER_TUNE * Math.pow(2, (i - 69) / 12));
var NoteNumbers;
((NoteNumbers2) => {
  NoteNumbers2.C0 = 12;
  NoteNumbers2.Cs0 = 13;
  NoteNumbers2.Db0 = 13;
  NoteNumbers2.D0 = 14;
  NoteNumbers2.Ds0 = 15;
  NoteNumbers2.Eb0 = 15;
  NoteNumbers2.E0 = 16;
  NoteNumbers2.Es0 = 17;
  NoteNumbers2.Fb0 = 16;
  NoteNumbers2.F0 = 17;
  NoteNumbers2.Fs0 = 18;
  NoteNumbers2.Gb0 = 18;
  NoteNumbers2.G0 = 19;
  NoteNumbers2.Gs0 = 20;
  NoteNumbers2.Ab0 = 20;
  NoteNumbers2.A0 = 21;
  NoteNumbers2.As0 = 22;
  NoteNumbers2.Bb0 = 22;
  NoteNumbers2.B0 = 23;
  NoteNumbers2.Bs0 = 24;
  NoteNumbers2.Cb1 = 23;
  NoteNumbers2.C1 = 24;
  NoteNumbers2.Cs1 = 25;
  NoteNumbers2.Db1 = 25;
  NoteNumbers2.D1 = 26;
  NoteNumbers2.Ds1 = 27;
  NoteNumbers2.Eb1 = 27;
  NoteNumbers2.E1 = 28;
  NoteNumbers2.Es1 = 29;
  NoteNumbers2.Fb1 = 28;
  NoteNumbers2.F1 = 29;
  NoteNumbers2.Fs1 = 30;
  NoteNumbers2.Gb1 = 30;
  NoteNumbers2.G1 = 31;
  NoteNumbers2.Gs1 = 32;
  NoteNumbers2.Ab1 = 32;
  NoteNumbers2.A1 = 33;
  NoteNumbers2.As1 = 34;
  NoteNumbers2.Bb1 = 34;
  NoteNumbers2.B1 = 35;
  NoteNumbers2.Bs1 = 36;
  NoteNumbers2.Cb2 = 35;
  NoteNumbers2.C2 = 36;
  NoteNumbers2.Cs2 = 37;
  NoteNumbers2.Db2 = 37;
  NoteNumbers2.D2 = 38;
  NoteNumbers2.Ds2 = 39;
  NoteNumbers2.Eb2 = 39;
  NoteNumbers2.E2 = 40;
  NoteNumbers2.Es2 = 41;
  NoteNumbers2.Fb2 = 40;
  NoteNumbers2.F2 = 41;
  NoteNumbers2.Fs2 = 42;
  NoteNumbers2.Gb2 = 42;
  NoteNumbers2.G2 = 43;
  NoteNumbers2.Gs2 = 44;
  NoteNumbers2.Ab2 = 44;
  NoteNumbers2.A2 = 45;
  NoteNumbers2.As2 = 46;
  NoteNumbers2.Bb2 = 46;
  NoteNumbers2.B2 = 47;
  NoteNumbers2.Bs2 = 48;
  NoteNumbers2.Cb3 = 47;
  NoteNumbers2.C3 = 48;
  NoteNumbers2.Cs3 = 49;
  NoteNumbers2.Db3 = 49;
  NoteNumbers2.D3 = 50;
  NoteNumbers2.Ds3 = 51;
  NoteNumbers2.Eb3 = 51;
  NoteNumbers2.E3 = 52;
  NoteNumbers2.Es3 = 53;
  NoteNumbers2.Fb3 = 52;
  NoteNumbers2.F3 = 53;
  NoteNumbers2.Fs3 = 54;
  NoteNumbers2.Gb3 = 54;
  NoteNumbers2.G3 = 55;
  NoteNumbers2.Gs3 = 56;
  NoteNumbers2.Ab3 = 56;
  NoteNumbers2.A3 = 57;
  NoteNumbers2.As3 = 58;
  NoteNumbers2.Bb3 = 58;
  NoteNumbers2.B3 = 59;
  NoteNumbers2.Bs3 = 60;
  NoteNumbers2.Cb4 = 59;
  NoteNumbers2.C4 = 60;
  NoteNumbers2.Cs4 = 61;
  NoteNumbers2.Db4 = 61;
  NoteNumbers2.D4 = 62;
  NoteNumbers2.Ds4 = 63;
  NoteNumbers2.Eb4 = 63;
  NoteNumbers2.E4 = 64;
  NoteNumbers2.Es4 = 65;
  NoteNumbers2.Fb4 = 64;
  NoteNumbers2.F4 = 65;
  NoteNumbers2.Fs4 = 66;
  NoteNumbers2.Gb4 = 66;
  NoteNumbers2.G4 = 67;
  NoteNumbers2.Gs4 = 68;
  NoteNumbers2.Ab4 = 68;
  NoteNumbers2.A4 = 69;
  NoteNumbers2.As4 = 70;
  NoteNumbers2.Bb4 = 70;
  NoteNumbers2.B4 = 71;
  NoteNumbers2.Bs4 = 72;
  NoteNumbers2.Cb5 = 71;
  NoteNumbers2.C5 = 72;
  NoteNumbers2.Cs5 = 73;
  NoteNumbers2.Db5 = 73;
  NoteNumbers2.D5 = 74;
  NoteNumbers2.Ds5 = 75;
  NoteNumbers2.Eb5 = 75;
  NoteNumbers2.E5 = 76;
  NoteNumbers2.Es5 = 77;
  NoteNumbers2.Fb5 = 76;
  NoteNumbers2.F5 = 77;
  NoteNumbers2.Fs5 = 78;
  NoteNumbers2.Gb5 = 78;
  NoteNumbers2.G5 = 79;
  NoteNumbers2.Gs5 = 80;
  NoteNumbers2.Ab5 = 80;
  NoteNumbers2.A5 = 81;
  NoteNumbers2.As5 = 82;
  NoteNumbers2.Bb5 = 82;
  NoteNumbers2.B5 = 83;
  NoteNumbers2.Bs5 = 84;
  NoteNumbers2.Cb6 = 83;
  NoteNumbers2.C6 = 84;
  NoteNumbers2.Cs6 = 85;
  NoteNumbers2.Db6 = 85;
  NoteNumbers2.D6 = 86;
  NoteNumbers2.Ds6 = 87;
  NoteNumbers2.Eb6 = 87;
  NoteNumbers2.E6 = 88;
  NoteNumbers2.Es6 = 89;
  NoteNumbers2.Fb6 = 88;
  NoteNumbers2.F6 = 89;
  NoteNumbers2.Fs6 = 90;
  NoteNumbers2.Gb6 = 90;
  NoteNumbers2.G6 = 91;
  NoteNumbers2.Gs6 = 92;
  NoteNumbers2.Ab6 = 92;
  NoteNumbers2.A6 = 93;
  NoteNumbers2.As6 = 94;
  NoteNumbers2.Bb6 = 94;
  NoteNumbers2.B6 = 95;
  NoteNumbers2.Bs6 = 96;
  NoteNumbers2.Cb7 = 95;
  NoteNumbers2.C7 = 96;
  NoteNumbers2.Cs7 = 97;
  NoteNumbers2.Db7 = 97;
  NoteNumbers2.D7 = 98;
  NoteNumbers2.Ds7 = 99;
  NoteNumbers2.Eb7 = 99;
  NoteNumbers2.E7 = 100;
  NoteNumbers2.Es7 = 101;
  NoteNumbers2.Fb7 = 100;
  NoteNumbers2.F7 = 101;
  NoteNumbers2.Fs7 = 102;
  NoteNumbers2.Gb7 = 102;
  NoteNumbers2.G7 = 103;
  NoteNumbers2.Gs7 = 104;
  NoteNumbers2.Ab7 = 104;
  NoteNumbers2.A7 = 105;
  NoteNumbers2.As7 = 106;
  NoteNumbers2.Bb7 = 106;
  NoteNumbers2.B7 = 107;
  NoteNumbers2.Bs7 = 108;
  NoteNumbers2.Cb8 = 107;
  NoteNumbers2.C8 = 108;
  NoteNumbers2.Cs8 = 109;
  NoteNumbers2.Db8 = 109;
  NoteNumbers2.D8 = 110;
  NoteNumbers2.Ds8 = 111;
  NoteNumbers2.Eb8 = 111;
  NoteNumbers2.E8 = 112;
  NoteNumbers2.Es8 = 113;
  NoteNumbers2.Fb8 = 112;
  NoteNumbers2.F8 = 113;
  NoteNumbers2.Fs8 = 114;
  NoteNumbers2.Gb8 = 114;
  NoteNumbers2.G8 = 115;
  NoteNumbers2.Gs8 = 116;
  NoteNumbers2.Ab8 = 116;
  NoteNumbers2.A8 = 117;
  NoteNumbers2.As8 = 118;
  NoteNumbers2.Bb8 = 118;
  NoteNumbers2.B8 = 119;
  NoteNumbers2.Bs8 = 120;
  NoteNumbers2.Cb9 = 119;
  NoteNumbers2.C9 = 120;
  NoteNumbers2.Cs9 = 121;
  NoteNumbers2.Db9 = 121;
  NoteNumbers2.D9 = 122;
  NoteNumbers2.Ds9 = 123;
  NoteNumbers2.Eb9 = 123;
  NoteNumbers2.E9 = 124;
  NoteNumbers2.Es9 = 125;
  NoteNumbers2.Fb9 = 124;
  NoteNumbers2.F9 = 125;
  NoteNumbers2.Fs9 = 126;
  NoteNumbers2.Gb9 = 126;
  NoteNumbers2.G9 = 127;
})(NoteNumbers || (NoteNumbers = {}));
var Intervals;
((Intervals2) => {
  Intervals2.maj = [0, 4, 7];
  Intervals2.min = [0, 3, 7];
  Intervals2.sus4 = [0, 5, 7];
  Intervals2.sus2 = [0, 2, 7];
  Intervals2.aug = [0, 4, 8];
  Intervals2.dim = [0, 3, 6];
  Intervals2.six = [9];
  Intervals2.min7 = [10];
  Intervals2.maj7 = [11];
  Intervals2.add9 = [14];
  Intervals2.add11 = [17];
  Intervals2.add13 = [19];
  Intervals2.major = [0, 2, 4, 5, 7, 9, 11];
  Intervals2.minor = [0, 2, 3, 5, 6, 8, 11];
  Intervals2.harmonicmin = [0, 2, 3, 5, 7, 8, 11];
  Intervals2.melodicmin = [0, 2, 3, 5, 7, 9, 11];
  Intervals2.ionian = [0, 2, 4, 5, 7, 9, 11];
  Intervals2.dorian = [0, 2, 3, 5, 7, 9, 10];
  Intervals2.phrygian = [0, 1, 3, 5, 7, 8, 10];
  Intervals2.lydian = [0, 2, 4, 6, 7, 9, 11];
  Intervals2.mixolydian = [0, 2, 4, 5, 7, 9, 10];
  Intervals2.aeolian = [0, 2, 3, 5, 7, 8, 10];
  Intervals2.locrian = [0, 1, 3, 5, 6, 8, 10];
  Intervals2.wholetone = [0, 2, 4, 6, 8, 10];
})(Intervals || (Intervals = {}));

// src/mage.spell.ts
var createSpell = (mage) => (props) => {
  let { source, sequence, duration } = props;
  let _isActivated = false;
  let _nextScheduleTime = 0;
  let _currentStep = 0;
  let loopCount = 0;
  const flatSteps = (steps2, value) => {
    let result = [];
    steps2.forEach((step) => {
      if (step instanceof Array) {
        result.push(...flatSteps(step, value / step.length));
      } else {
        result.push({ step, value });
      }
    });
    return result;
  };
  const tempSteps = sequence({ ...mage.timing, loopCount });
  let steps = flatSteps(tempSteps, 1 / tempSteps.length);
  const schedule = (currentTime, beatLength) => {
    const spellLength = beatLength * duration;
    if (!_isActivated)
      return;
    while (currentTime + WORK_INTERVAL > _nextScheduleTime) {
      const { step, value } = steps[_currentStep];
      if (step) {
        [step.noteNumber].flat().forEach((noteNumber) => {
          source.play({
            noteNumber,
            startTime: _nextScheduleTime,
            volume: step.volume ?? 1,
            duration: spellLength * value * step.duration
          });
        });
      }
      _nextScheduleTime += spellLength * value;
      _currentStep++;
      if (_currentStep >= steps.length) {
        _currentStep = 0;
        loopCount++;
        steps = flatSteps(
          sequence({ ...mage.timing, loopCount }),
          1 / tempSteps.length
        );
      }
    }
  };
  return {
    get isActivated() {
      return _isActivated;
    },
    set isActivated(value) {
      _isActivated = value;
    },
    get nextScheduleTime() {
      return _nextScheduleTime;
    },
    set nextScheduleTime(value) {
      _nextScheduleTime = value;
    },
    get currentStep() {
      return _currentStep;
    },
    schedule,
    source,
    sequence,
    duration
  };
};
var mage_spell_default = createSpell;

// src/mage.gain.ts
var createGainNode = (audioContext) => (startTime, baseGain, duration, adsr) => {
  const { attack, decay, sustain, release } = adsr;
  const gainNode = audioContext.createGain();
  const attackTimeInSecond = attack / 1e3;
  const decayTimeInSecond = decay / 1e3;
  const releaseTimeInSecond = release / 1e3;
  gainNode.gain.linearRampToValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(
    baseGain,
    startTime + attackTimeInSecond
  );
  gainNode.gain.linearRampToValueAtTime(
    baseGain * sustain,
    startTime + attackTimeInSecond + decayTimeInSecond
  );
  const durationWithReleaseTime = duration + releaseTimeInSecond;
  gainNode.gain.linearRampToValueAtTime(
    0,
    startTime + attackTimeInSecond + decayTimeInSecond + durationWithReleaseTime
  );
  return gainNode;
};

// src/mage.synth.ts
var createSynth = (audioContext) => (oscillators = [{ type: "sawtooth", detune: 0, semitone: 0 }]) => {
  const play = (props) => {
    const { noteNumber, startTime, duration, volume } = props;
    const adsr = props.adsr ?? {
      attack: 0,
      decay: 0,
      sustain: 1,
      release: 0
    };
    oscillators.forEach((oscillator) => {
      const gain = createGainNode(audioContext)(
        startTime,
        volume,
        duration,
        adsr
      );
      gain.connect(audioContext.destination);
      const osc = new OscillatorNode(audioContext, {
        type: oscillator.type,
        detune: oscillator.detune,
        frequency: FREQUENCY[noteNumber + oscillator.semitone]
      });
      osc.start(startTime);
      osc.stop(startTime + duration + (adsr ? adsr.release / 1e3 : 0));
      osc.connect(gain);
    });
  };
  return { play };
};

// src/mage.step.ts
var createStep = (noteNumber, volume = 1, duration = 1) => {
  return { noteNumber, volume, duration };
};

// src/mage.ts
var createMage = ({ tempo = 128, beatsParCycle = 8 }) => {
  const audioContext = new AudioContext();
  const beatLength = 60 / tempo;
  let beatCount = 0;
  const spells = /* @__PURE__ */ new Map();
  let nextScheduleTime = 0;
  const schedule = () => {
    while (audioContext.currentTime + WORK_INTERVAL > nextScheduleTime) {
      if (beatCount % beatsParCycle === 0) {
        console.log("---------------------");
        spells.forEach((spell) => {
          if (!spell.isActivated) {
            spell.isActivated = true;
            spell.nextScheduleTime = nextScheduleTime;
          }
        });
      }
      console.log({
        beatCount
      });
      beatCount++;
      nextScheduleTime += beatLength;
    }
    spells.forEach((spell) => {
      spell.schedule(audioContext.currentTime, beatLength);
    });
  };
  let timer;
  const start = () => {
    timer = window.setInterval(schedule, WORK_INTERVAL * 1e3);
  };
  const stop = () => clearInterval(timer);
  start();
  return {
    audioContext,
    tempo,
    beatsParCycle,
    beatLength,
    spells,
    beatCount,
    start,
    stop,
    get timing() {
      return {
        cycles: Math.floor(beatCount / beatsParCycle),
        beats: beatCount % beatsParCycle
      };
    },
    cast(name, props) {
      const delay = beatLength * (beatsParCycle - beatCount % beatsParCycle) * 1e3 - 50;
      console.log({ delay, beat: beatCount % beatsParCycle });
      if (props == null) {
        window.setTimeout(() => {
          spells.delete(name);
        }, delay);
        return;
      }
      const spell = mage_spell_default(this)(props);
      window.setTimeout(() => {
        spells.set(name, spell);
      }, delay);
    },
    useMetrognome(enabled = true) {
      if (enabled) {
        const source = createSynth(this.audioContext)([
          {
            type: "square",
            detune: 0,
            semitone: 0
          }
        ]);
        const sequence = ({ beats }) => {
          return [
            createStep(beats === 0 ? NoteNumbers.A6 : NoteNumbers.A5, 1, 0.2)
          ];
        };
        const duration = 1;
        console.log({
          source,
          sequence,
          duration
        });
        this.cast("metrognome", {
          source,
          sequence,
          duration
        });
      } else {
        this.cast("metrognome", null);
      }
    }
  };
};

// src/mage.sequence.ts
var createSequence = (rng) => (scale) => (pattern, duration = 1, volume = 1, ignoreMarks = false) => {
  const seq = [];
  const ptn = pattern.split("");
  for (let i = 0; i < ptn.length; i++) {
    const op = ptn[i];
    const parsed = parseInt(op, 16);
    if (!isNaN(parsed)) {
      seq.push({ noteNumber: scale[parsed], volume, duration });
      continue;
    }
    if (ignoreMarks) {
      continue;
    }
    if (op == " ") {
      seq.push(null);
      continue;
    }
    if (op == ".") {
      const lastNoteIndex = seq.findLastIndex((note) => note != null);
      if (lastNoteIndex >= 0) {
        seq.push(seq[lastNoteIndex]);
      } else {
        seq.push(null);
      }
      continue;
    }
    if (op == "?") {
      const randNote = rng(0, scale.length - 1);
      seq.push({ noteNumber: scale[randNote], volume, duration });
      continue;
    }
    if (op == "-") {
      const lastNoteIndex = seq.findLastIndex((note) => note != null);
      if (lastNoteIndex >= 0) {
        seq[lastNoteIndex].duration += duration;
      }
      seq.push(null);
      continue;
    }
    if (op == "[") {
      const bracketIndex = findCloseBracketIndex("[", pattern, i);
      if (bracketIndex >= 0) {
        const innerSeq = createSequence(rng)(scale)(
          ptn.slice(i + 1, bracketIndex).join(""),
          duration / (bracketIndex - i - 1),
          volume
        );
        seq.push(innerSeq);
        i = bracketIndex;
      }
      continue;
    }
    if (op == "{") {
      const bracketIndex = findCloseBracketIndex("{", pattern, i);
      if (bracketIndex >= 0) {
        const noteNumber = createSequence(rng)(scale)(
          ptn.slice(i + 1, bracketIndex).join(""),
          duration,
          volume,
          true
        ).map((note) => {
          if (note == null) {
            return null;
          }
          if (Array.isArray(note)) {
            return null;
          }
          return note?.noteNumber;
        }).filter((note) => note != null);
        seq.push({ noteNumber, volume, duration });
        i = bracketIndex;
      }
      continue;
    }
  }
  return seq;
};
var bracketPairs = { "[": "]", "{": "}" };
var findCloseBracketIndex = (bracket, pattern, startIndex) => {
  let nest = 0;
  for (let i = startIndex; i < pattern.length; i++) {
    if (pattern[i] == bracket) {
      nest++;
    }
    if (pattern[i] == bracketPairs[bracket]) {
      nest--;
      if (nest <= 0) {
        return i;
      }
    }
  }
  return -1;
};

// src/mage.sampler.ts
var createSampler = (audioContext) => async (sourceUrls) => {
  const promises = sourceUrls.map(async (url) => {
    return fetch(url).then((response) => {
      return response.arrayBuffer();
    }).then(async (arrBuf) => {
      const audioBuf = await audioContext.decodeAudioData(arrBuf);
      return audioBuf;
    });
  });
  const audioBuffers = await Promise.allSettled(promises).then(
    (responses) => {
      return responses.map(
        (item) => item.status === "fulfilled" ? item.value : null
      );
    }
  );
  const play = (props) => {
    const { noteNumber, startTime, duration, volume } = props;
    const adsr = props.adsr ?? {
      attack: 0,
      decay: 0,
      sustain: 1,
      release: 0
    };
    const gain = createGainNode(audioContext)(
      startTime,
      volume,
      duration,
      adsr
    );
    const audioBuffer = audioContext.createBufferSource();
    audioBuffer.buffer = audioBuffers[noteNumber];
    if (audioBuffer.buffer != null) {
      const bufferDuration = audioBuffer.buffer.duration;
      gain.connect(audioContext.destination);
      audioBuffer.connect(gain);
      audioBuffer.start(startTime);
      audioBuffer.stop(startTime + bufferDuration + adsr.release / 1e3);
    }
  };
  return { play };
};

// src/mage.scale.ts
var createScale = (rootNoteNumber, ...chordIntervals) => {
  const intervals = new Set(chordIntervals.flat().flat());
  const scale = [];
  intervals.forEach((interval) => {
    scale.push(rootNoteNumber + interval);
  });
  return scale;
};
var getRootNotes = (scales) => {
  return scales.map((scale) => scale[0]);
};

// src/mage.utils.ts
function* RNG(seed = 88675123) {
  let x = 123456789;
  let y = 362436069;
  let z = 521288629;
  let w = seed;
  while (true) {
    const t = x ^ x << 11;
    x = y;
    y = z;
    z = w;
    w = w ^ w >>> 19 ^ (t ^ t >>> 8);
    yield (w + 2147483647) / 4294967296;
  }
}
var getRandomInt = (generator) => (min = 0, max = 9) => {
  return Math.floor(generator.next().value * (max + 1 - min)) + min;
};

// src/index.ts
var src_default = createMage;
