import hello from './hello'

describe(`Test func hello`, () => {
  it('Should match result', () => {
    const result = hello('Smart')
    expect(result).toBe('hello, Smart. This is a typescript package.')
  })
})
