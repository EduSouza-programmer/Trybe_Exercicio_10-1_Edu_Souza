<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  <strike>Exercício 10-1: Primeiros passos no Jest - Concluído o/ o/ o/ :star:</strike>
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Você já aprendeu o que são e para que servem testes unitários. Já sabe usar o módulo assert do NodeJS para fazer asserções simples sobre suas funções. Também já aprendeu a testar programas maiores que envolvem diferentes fluxos de execução. Hoje você aprenderá a utilizar o Jest, um framework de testes unitários para JavaScript desenvolvido pelo Facebook.

# :postbox: Entrega

### :clipboard: Sumário

#####  Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript, dessa vez utilizando Jest.

- <p><a href="#1"> :pushpin: 1.</a> A função sum(a, b) retorna a soma do parâmetro a com o b;</p>

- <p><a href="#2"> :pushpin: 2.</a> A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array;</p>

- <p><a href="#3"> :pushpin: 3.</a> A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item, caso ele exista no array;</p>

- <p><a href="#4"> :pushpin: 4.</a> A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número;</p>

- <p><a href="#5"> :pushpin: 5.</a> Compare dois objetos (JSON) para verificar se são idênticos ou não.</p>

Faça os exercícios fizzbuzz, palidrome, reverseInt e vowels _[deste repositório](https://github.com/iamgique/jest-exercises)_. Os testes para cada exercício já estão prontos. Você precisa completar as funções de cada exercício de forma que todos os testes passem. Clone o repositório ou copie os arquivos para sua máquina.

- <p><a href="#6"> :pushpin: 6.</a> FizzBuzz.</p>

- <p><a href="#7"> :pushpin: 7.</a> Palindrome.</p>

- <p><a href="#8"> :pushpin: 8.</a> Reverseint.</p>

- <p><a href="#9"> :pushpin: 9.</a> Vowels.</p>




## :books: Exercícios

### 1°

A função sum(a, b) retorna a soma do parâmetro a com o b

- Teste se o retorno de sum(4, 5) é 9.
- Teste se o retorno de sum(0, 0) é 0.
- Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5).
- Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5").

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array

- Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
- Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- Faça uma chamada para a função myRemove e verifique se o array passado por parâmetro não sofreu alterações
- Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const myRemove = require('./exercise2');

describe('função que retira um item do array [myRemove]', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Faça uma chamada para a função myRemove e verifique se o array passado por parâmetro não sofreu alterações', () => {
    const arrayNotModify = [1, 2, 3, 4];
    myRemove([arrayNotModify], 3);
    expect(arrayNotModify).toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item, caso ele exista no array

- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
- Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
- Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const myFizzBuzz = require('./exercise4');

describe('Testes da função [myFizzBuzz]', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

Compare dois objetos (JSON) para verificar se são idênticos ou não

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

const { obj1, obj2, obj3 } = require('./exercise5');

describe('Objetos test', () => {
  it('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj3).not.toEqual(obj2);
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

FizzBuzz

-  Write a program that console logs the numbers
-  from 1 to n. But for multiples of three print
-  “fizz” instead of the number and for the multiples
-  of five print “buzz”. For numbers which are multiples
- of both three and five print “fizzbuzz”.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
function fizzBuzz(n) {
  Array.from({ length: `${n + 1}` }, (_, index) => {
    const fizzBuzz = index % 3 === 0 && index % 5 === 0;
    const fizz = index % 3 === 0;
    const buzz = index % 5 === 0;
    if (index === 0) return;
    if (fizzBuzz) {
      console.log('fizzbuzz');
      return;
    } else if (buzz) {
      console.log('buzz');
      return;
    } else if (fizz) {
      console.log('fizz');
      return;
    }
    console.log(index);
  });
}
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 7°

Palindrome

- Given a string, return true if the string is a palindrome
- or false if it is not.  Palindromes are strings that
- form the same word if it is reversed. *Do* include spaces
- and punctuation in determining if the string is a palindrome.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
function palindrome(str) {
  const strInvert = str.split('').reverse().join('');
  if (str !== strInvert) return false;
  return true;
}
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 8°

Reverseint

Given an integer, return an integer that is the reverse ordering of numbers.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
function reverseInt(n) {
  const numberReverseNegative = -Number(
    Math.abs(n).toString().split('').reverse().join('')
  );
  const numberReverse = Number(String(n).split('').reverse().join(''));
  return n < 0 ? numberReverseNegative : numberReverse;
}
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 9°

Vowels

Write a function that returns the number of vowels used in a string.  Vowels are the characters 'a', 'e' 'i', 'o', and 'u'.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
function vowels(str) {
  const re = /[aAeEiIoOuU]/g;
  return (str.match(re) || []).length;
}
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
