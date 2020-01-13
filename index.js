import { times } from 'ramda'
import determineNote from './services/determine-note'
import calculateFrequency from './services/calculate-frequency'

const A_FOUR_FREQUENCY = 440
const C_FOUR_FREQUENCY = calculateFrequency(A_FOUR_FREQUENCY, 3, 3)
const OCTAVES_TO_DISPLAY = 9

/**
 * Generate frequencies for the octave
 * @param octave
 * @returns {IterableIterator<*>}
 */
function* frequencyGenerator(octave) {
  let interval = 0
  while (interval < 12) {
    yield {
      note: determineNote(interval, octave),
      frequency: calculateFrequency(C_FOUR_FREQUENCY, interval, octave)
    }
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
  for (const container of frequencyGenerator(octave)) {
    console.log(container.frequency)
    console.log(container.note)
  }
}

// Quick test to see if this works
times(octaveGenerator, OCTAVES_TO_DISPLAY)
