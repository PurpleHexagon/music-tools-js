import { add, bignumber, divide, format, multiply, pow, subtract } from 'mathjs'
import { curry } from 'ramda'

/**
 * Calculate frequency for interval and octave
 *
 * referenceFrequency * 2 ** ((octave - 4) + (interval / 12))
 *
 * @param referenceFrequency
 * @param interval
 * @param octave
 * @returns {number}
 */
const calculateFrequency = curry((referenceFrequency, interval, octave) => (
    format(
        multiply(
            referenceFrequency,
            pow(
                bignumber('2'),
                add(
                    subtract(octave, bignumber('4')),
                    divide(interval, bignumber('12'))
                )
            )
        ),
        { notation: 'fixed', precision: 16 }
    ).toString()
))

const A_FOUR_FREQUENCY = 440
const C_FOUR_FREQUENCY = calculateFrequency(A_FOUR_FREQUENCY, 3, 3)

export default calculateFrequency(C_FOUR_FREQUENCY)
