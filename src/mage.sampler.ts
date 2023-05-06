import { Source, Envelope } from "./mage.types";
import { createGainNode } from "./mage.gain";

/**
 * Create sampler
 *
 * @param audioContext - AudioContext
 * @param sourceUrls - Array of sound source URLs
 * @returns Source
 */
export const createSampler =
  (audioContext: AudioContext) =>
  async (sourceUrls: string[]): Promise<Source> => {
    const promises = sourceUrls.map(async (url) => {
      return fetch(url)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then(async (arrBuf) => {
          const audioBuf = await audioContext.decodeAudioData(arrBuf);
          return audioBuf;
        });
    });
    const audioBuffers = await Promise.allSettled(promises).then(
      (responses) => {
        return responses.map((item) =>
          item.status === "fulfilled" ? item.value : null
        );
      }
    );
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
        audioBuffer.stop(startTime + bufferDuration + adsr.release / 1000);
      }
    };

    return { play };
  };
