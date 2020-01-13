import determineNote from '../determine-note';
const chai = require('chai')
const { expect } = chai

describe("determine-note", () => {
    it('returns a string', () => {
        const note = determineNote(9, 4)
        expect(note).to.be.a('String')
    })

    it('returns note of A4 when interval is 9 and octave is 4', () => {
        const note = determineNote(9, 4)
        expect(note).to.eql('A4')
    })

    it('returns note of C3 when interval is 0 and octave is 3', () => {
        const note = determineNote(0, 3)
        expect(note).to.eql('C3')
    })

    it('returns note of B3 when interval is 11 and octave is 3', () => {
        const note = determineNote(11, 3)
        expect(note).to.eql('B3')
    })
})
