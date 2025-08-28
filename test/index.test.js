import { greet } from '../src/index.js';
import { expect } from 'chai';

describe('Greeting Function', () => {
  it('should return "Hello, World!"', () => {
    const result = greet();
    expect(result).to.equal('Hello, World!');
  });
});