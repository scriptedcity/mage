import { Envelope } from "./mage.types";

/**
 * Create GainNode with ADSR envelope
 * @param audioContext - AudioContext
 * @returns GainNode
 */
export const createGainNode =
  (audioContext: AudioContext) =>
  (startTime: number, baseGain: number, duration: number, adsr: Envelope) => {
    const { attack, decay, sustain, release } = adsr;
    // Create GainNode
    const gainNode = audioContext.createGain();
    const attackTimeInSecond = attack / 1000;
    const decayTimeInSecond = decay / 1000;
    const releaseTimeInSecond = release / 1000;
    gainNode.gain.linearRampToValueAtTime(0, startTime);
    //attack
    gainNode.gain.linearRampToValueAtTime(
      baseGain,
      startTime + attackTimeInSecond
    );
    //decay
    gainNode.gain.linearRampToValueAtTime(
      baseGain * sustain,
      startTime + attackTimeInSecond + decayTimeInSecond
    );
    //release
    const durationWithReleaseTime = duration + releaseTimeInSecond;
    gainNode.gain.linearRampToValueAtTime(
      0,
      startTime +
        attackTimeInSecond +
        decayTimeInSecond +
        durationWithReleaseTime
    );
    return gainNode;
  };
