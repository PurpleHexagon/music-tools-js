import calculateFrequency from '../calculate-frequency';
import determineNote from "../determine-note";
const chai = require('chai')
const { expect } = chai

describe("calculate-frequency", () => {
    it('returns a string', () => {
        const frequency = calculateFrequency(4, 4)
        expect(frequency).to.be.a('String')
    })

    it('returns note of A4 when interval is 9 and octave is 4', () => {
        const frequency = calculateFrequency(0, 4)
        expect(frequency).to.eql('261.6255653005986347')
    })
})
