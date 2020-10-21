const sum = require('./exercise1');

describe('função soma', () => {
  it('Test se o retorno de sum é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
