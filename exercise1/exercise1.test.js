const myRemove = require('../exercise2/exercise2');
const sum = require('./exercise1');

describe('função soma', () => {
  it('Testa se o retorno de sum é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Teste se o retorno de sum(0,0) é 0 ', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
