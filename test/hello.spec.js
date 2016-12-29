import expect from 'expect.js'
import hello from '../lib'
import _ from 'lodash'
import path from 'path'

describe(`Test func hello`, () => {
  it('Should return string', () => {
    const result = hello('Smart')
    expect(typeof result).to.equal('string')
  })
})
