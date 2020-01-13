import determineNote from '../determine-note';
const chai = require('chai')
const { expect } = chai

describe("determine-note", () => {
    it('returns note of A4 when interval is 9 and octave is 4', () => {
        const note = determineNote(9, 4)
        expect(note).to.eql('A4')
    })
})
