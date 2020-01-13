import { times } from 'ramda'
import determineNote from './services/determine-note';

const fkv = (fR, k, v ) => (fR * 2 ** ((v - 4) + (k / 12)))
const A_FOUR_FREQUENCY = 440
const C_FOUR_FREQUENCY = fkv(A_FOUR_FREQUENCY, 3, 3)
const OCTAVES_TO_DISPLAY = 9
let currentNote

/**
 * Generate frequencies for the octave
 * @param octave
 * @returns {IterableIterator<*>}
 */
function* frequencyGenerator(octave) {
  let interval = 0
  while (interval < 12) {
    currentNote = determineNote(interval, octave)
    yield fkv(C_FOUR_FREQUENCY, interval, octave)
    interval++
  }
  if (interval === 12) {
    interval = 0
  }
}

/**
 * Test harness code, prior to adding unit tests
 * @param octave
 */
function octaveGenerator(octave) {
  for (const frequency of frequencyGenerator(octave)) {
    console.log(currentNote)
    console.log(frequency)
  }
}

// Quick test to see if this works
times(octaveGenerator, OCTAVES_TO_DISPLAY)
