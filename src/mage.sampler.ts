import { Source, Envelope } from "./mage.types";
import { createGainNode } from "./mage.gain";

/**
 * `createSampler` is a function that creates a sampler source, which can be used to play back audio files.
 *
 * @param audioContext - The AudioContext in which the sampler operates.
 * @param analyser - THE analyser node for the audio context.
 *
 * @returns A function that takes an array of sourceUrls, which are URLs of audio files to be loaded into the sampler.
 *          The returned function creates a Source object with a `play` method that takes the following properties:
 *          - `noteNumber` - The index of the audio file in the sourceUrls array to play.
 *          - `volume` - The volume of the note (0-1).
 *          - `startTime` - The time at which to start playing the note in seconds.
 *          - `duration` - The duration for which to play the note in seconds.
 *          - `adsr` - An optional ADSR envelope object, which can have the following properties:
 *            - `attack` - The attack time in seconds (default is 0).
 *            - `decay` - The decay time in seconds (default is 0).
 *            - `sustain` - The sustain level (0-1) (default is 1).
 *            - `release` - The release time in seconds (default is 0).
 *          The `play` method creates the necessary gain and buffer source nodes, connects them, and schedules the note to play.
 *          If the release time is greater than the duration, the gain will ramp down to zero at the end of the release period.
 *
 * @throws If any of the fetch requests fail, the corresponding promise is rejected and the status of the Promise.allSettled promise becomes 'rejected'.
 *         The rejected promise will return `null` for the audio buffer in the array of audio buffers.
 */
export const createSampler =
  (audioContext: AudioContext, analyser: AnalyserNode) =>
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
        gain.connect(analyser);

        audioBuffer.connect(gain);
        audioBuffer.start(startTime);
        audioBuffer.stop(startTime + bufferDuration + adsr.release / 1000);
      }
    };

    return { play };
  };
