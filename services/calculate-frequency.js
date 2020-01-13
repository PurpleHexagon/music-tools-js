/**
 * Calculate frequency for interval and octave
 *
 * @param referenceFrequency
 * @param interval
 * @param octave
 * @returns {number}
 */
const calculateFrequency = (referenceFrequency, interval, octave) =>
    (referenceFrequency * 2 ** ((octave - 4) + (interval / 12)))

export default calculateFrequency
