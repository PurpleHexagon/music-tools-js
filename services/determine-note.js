import { concat, nth } from 'ramda'

/**
 * Returns the note as string, EG: A4
 * @param interval
 * @param octave
 * @returns String
 */
function determineNote(interval, octave) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

    return concat(
        nth(interval, notes),
        String(octave)
    )
}

export default determineNote