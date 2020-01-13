import calculateFrequency from "./calculate-frequency";
import determineNote from "./determine-note";

const A_FOUR_FREQUENCY = 440
const C_FOUR_FREQUENCY = calculateFrequency(A_FOUR_FREQUENCY, 3, 3)
const MAX_INTERVAL = 12

/**
 * Generate frequencies for the octave
 * @param octave
 * @returns {IterableIterator<*>}
 */
function* frequencyGenerator(octave) {
    let interval = 0
    while (interval < MAX_INTERVAL) {
        yield {
            note: determineNote(interval, octave),
            frequency: calculateFrequency(C_FOUR_FREQUENCY, interval, octave)
        }
        interval++
    }
    if (interval === MAX_INTERVAL) {
        interval = 0
    }
}

export default frequencyGenerator
