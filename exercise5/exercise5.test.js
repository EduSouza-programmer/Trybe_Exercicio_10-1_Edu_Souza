const { obj1, obj2, obj3 } = require('./exercise5');

describe('Objetos test', () => {
  it('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj3).not.toEqual(obj2);
  });
});
