const { greet } = require('../src/index');
const { expect } = require('chai');

describe('Greeting Function', () => {
  it('should return "Hello, World!"', () => {
    const result = greet();
    expect(result).to.equal('Hello, World!');
  });
});