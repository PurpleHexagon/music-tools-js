import { times } from 'ramda'
import frequencyGenerator from './services/frequency-generator'

const OCTAVES_TO_DISPLAY = 9

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
