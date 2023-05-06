import { FREQUENCY } from "./mage.const";
import { OscillatorType, Source, Envelope } from "./mage.types";
import { createGainNode } from "./mage.gain";

export const createSynth =
  (audioContext: AudioContext) =>
  (
    oscillators: {
      type: OscillatorType;
      detune: number;
      semitone: number;
    }[] = [{ type: "sawtooth", detune: 0, semitone: 0 }]
  ): Source => {
    const play = (props: {
      noteNumber: number;
      volume: number;
      startTime: number;
      duration: number;
      adsr?: Envelope;
    }) => {
      const { noteNumber, startTime, duration, volume } = props;
      const adsr = props.adsr ?? {
        attack: 0,
        decay: 0,
        sustain: 1,
        release: 0,
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
          frequency: FREQUENCY[noteNumber + oscillator.semitone],
        });
        osc.start(startTime);
        osc.stop(startTime + duration + (adsr ? adsr.release / 1000 : 0));
        osc.connect(gain);
      });
    };

    return { play };
  };
