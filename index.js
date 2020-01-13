import { times } from 'ramda'
import determineNote from './services/determine-note'
import calculateFrequency from './services/calculate-frequency'
import frequencyGenerator from './services/frequency-generator'

const OCTAVES_TO_DISPLAY = 9

/**
 * Test harness code, prior to adding unit tests
 * @param octave
 */
function octaveGenerator(octave) {
  for (const container of frequencyGenerator(octave)) {
    console.log(container.note)
    console.log(container.frequency)
  }
}

// Quick test to see if this works
times(octaveGenerator, OCTAVES_TO_DISPLAY)
