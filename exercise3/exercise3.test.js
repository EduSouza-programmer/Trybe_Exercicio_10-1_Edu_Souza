const myRemovedWithoutCopy = require('./exercise3');

const myArray = [1, 2, 3, 4];

describe('Testes da função [myRemoveWithoutCopy]', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    myRemovedWithoutCopy(myArray, 3);
    expect(myArray).toEqual([1, 2, 4]);
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    myRemovedWithoutCopy(myArray, 3);
    expect(myArray).not.toEqual([1, 2, 3, 4]);
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const myArray = [1, 2, 3, 4];
    myRemovedWithoutCopy(myArray, 4);
    expect(myArray).toEqual([1, 2, 3]);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemovedWithoutCopy([1, 2, 3, 4], 5)).toEqual(undefined);
  });
});
