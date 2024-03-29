// src/mage.const.ts
var CAST_DELAY_CORRECTION = 10;
var WORK_INTERVAL = 0.1;
var MASTER_TUNE = 440;
var FREQUENCY = Array(128).fill(void 0).map((_, i) => MASTER_TUNE * Math.pow(2, (i - 69) / 12));
var NOTE_NUMBERS = {
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
  G9: 127
};
var INTERVALS = {
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
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

// src/mage.spell.ts
var createSpell = (mage) => (props) => {
  const { sound, sequence, duration } = props;
  const analyser = mage.audioContext.createAnalyser();
  let _isActivated = false;
  let _nextScheduleTime = 0;
  let _currentStep = 0;
  let loopCount = 0;
  const flatSteps = (steps2, value) => {
    const result = [];
    try {
      steps2.forEach((step) => {
        if (step instanceof Array) {
          result.push(...flatSteps(step, value / step.length));
        } else {
          result.push({ step, value });
        }
      });
    } catch (e) {
      console.error("Failed to flatten steps:", e);
      throw e;
    }
    return result;
  };
  const tempSteps = sequence({ ...mage.getTiming(), loopCount });
  let steps = flatSteps(tempSteps, 1 / tempSteps.length);
  const schedule = (currentTime, beatLength) => {
    const spellLength = beatLength * duration;
    if (!_isActivated)
      return;
    while (currentTime + WORK_INTERVAL > _nextScheduleTime) {
      const { step, value } = steps[_currentStep];
      if (step) {
        [step.noteNumber].flat().forEach((noteNumber) => {
          sound({ ...mage.getTiming(), loopCount }).play(
            {
              noteNumber,
              startTime: _nextScheduleTime,
              volume: step.volume ?? 1,
              duration: spellLength * value * step.duration
            },
            [mage.analyser, analyser]
          );
        });
      }
      _nextScheduleTime += spellLength * value;
      _currentStep++;
      if (_currentStep >= steps.length) {
        _currentStep = 0;
        loopCount++;
        steps = flatSteps(
          sequence({ ...mage.getTiming(), loopCount }),
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
    analyser,
    schedule,
    sound,
    sequence,
    duration
  };
};

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
var createSynth = (mage) => (oscillators = [{ type: "sawtooth", detune: 0, semitone: 0 }]) => {
  const oscillatorCount = oscillators.length;
  const play = (props) => {
    const { noteNumber, startTime, duration, volume } = props;
    const adsr = props.adsr ?? {
      attack: 0,
      decay: 0,
      sustain: 1,
      release: 0
    };
    oscillators.forEach((oscillator) => {
      const gain = createGainNode(mage.audioContext)(
        startTime,
        volume / oscillatorCount,
        duration,
        adsr
      );
      gain.connect(mage.audioContext.destination);
      gain.connect(mage.analyser);
      const osc = new OscillatorNode(mage.audioContext, {
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

// src/mage.sampler.ts
var createSampler = (mage) => async (sourceUrls) => {
  const promises = sourceUrls.map(async (url) => {
    return fetch(url).then((response) => {
      return response.arrayBuffer();
    }).then(async (arrBuf) => {
      const audioBuf = await mage.audioContext.decodeAudioData(arrBuf);
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
    const gain = createGainNode(mage.audioContext)(
      startTime,
      volume,
      duration,
      adsr
    );
    const audioBuffer = mage.audioContext.createBufferSource();
    audioBuffer.buffer = audioBuffers[noteNumber];
    if (audioBuffer.buffer != null) {
      const bufferDuration = audioBuffer.buffer.duration;
      gain.connect(mage.audioContext.destination);
      gain.connect(mage.analyser);
      audioBuffer.connect(gain);
      audioBuffer.start(startTime);
      audioBuffer.stop(startTime + bufferDuration + adsr.release / 1e3);
    }
  };
  return { play };
};

// src/mage.step.ts
var createStep = (noteNumber, volume = 1, duration = 1) => {
  return { noteNumber, volume, duration };
};

// src/mage.sequence.ts
var createSequence = (rng) => (scale) => (pattern, duration = 1, volume = 1, ignoreMarks = false) => {
  const seq = [];
  const ptn = pattern.split("");
  for (let i = 0; i < ptn.length; i++) {
    const op = ptn[i];
    const parsed = parseInt(op, 16);
    if (!isNaN(parsed)) {
      seq.push({
        noteNumber: scale[parsed % scale.length],
        volume,
        duration
      });
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

// src/mage.rng.ts
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

// src/mage.ts
var createMage = ({
  tempo = 128,
  beatsPerCycle = 8,
  randomSeed = 88675123
}) => {
  if (tempo <= 1 || beatsPerCycle <= 1) {
    throw new Error("Tempo and beatsPerCycle must be greater than 1.");
  }
  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  const beatLength = 60 / tempo;
  let beatCount = 0;
  const spells = /* @__PURE__ */ new Map();
  let nextScheduleTime = 0;
  const schedule = () => {
    while (audioContext.currentTime + WORK_INTERVAL > nextScheduleTime) {
      if (beatCount % beatsPerCycle === 0) {
        console.log("---------------------");
        spells.forEach((spell) => {
          if (!spell.isActivated) {
            spell.isActivated = true;
            spell.nextScheduleTime = nextScheduleTime;
          }
        });
      }
      audioContext.dispatchEvent(tickEvent);
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
  const rng = getRandomInt(RNG(randomSeed));
  const mage = {
    audioContext,
    analyser,
    tempo,
    beatsPerCycle,
    beatLength,
    spells,
    beatCount,
    start,
    stop,
    getRandomInt: rng,
    createSequence: createSequence(rng)
  };
  mage.getTiming = () => {
    return {
      cycles: Math.floor(beatCount / beatsPerCycle),
      beats: beatCount % beatsPerCycle + 1
    };
  };
  mage.createSampler = createSampler(mage);
  mage.createSynth = createSynth(mage);
  mage.cast = (name, props) => {
    const delay = beatLength * (beatsPerCycle - beatCount % beatsPerCycle) * 1e3 - CAST_DELAY_CORRECTION;
    if (props == null) {
      window.setTimeout(() => {
        spells.delete(name);
      }, delay);
      return;
    }
    const spell = createSpell(mage)(props);
    window.setTimeout(() => {
      spells.set(name, spell);
    }, delay);
  };
  mage.suppress = (name) => {
    mage.cast(name, null);
  };
  mage.useMetronome = (enabled = true) => {
    if (enabled) {
      const sound = () => createSynth(mage)([
        {
          type: "square",
          detune: 0,
          semitone: 0
        }
      ]);
      const sequence = ({ beats }) => {
        return [
          createStep(beats === 0 ? NOTE_NUMBERS.A6 : NOTE_NUMBERS.A5, 1, 0.2)
        ];
      };
      const duration = 1;
      mage.cast("metronome", {
        sound,
        sequence,
        duration
      });
    } else {
      mage.cast("metronome", null);
    }
  };
  const tickEvent = new CustomEvent("tick", {
    detail: {
      getTiming: mage.getTiming
    }
  });
  return mage;
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

// src/index.ts
var src_default = createMage;
export {
  INTERVALS,
  NOTE_NUMBERS,
  createScale,
  createStep,
  src_default as default,
  getRootNotes
};
