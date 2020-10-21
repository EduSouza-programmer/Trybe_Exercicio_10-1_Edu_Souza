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

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js

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
