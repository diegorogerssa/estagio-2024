// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonnaci = (valorFibonacci) => {
  let anterior = 0;
  let atual = 1;
  let proximo = 1;
  let sequenciaFibonacci = []

  for(let indice = anterior; indice <= valorFibonacci; indice += 1) {
    if (indice < 1 ) sequenciaFibonacci.push(0)
    if (indice === 1 ) sequenciaFibonacci.push(1)
    anterior =  atual + proximo;
    atual = proximo;
    proximo = anterior;
    sequenciaFibonacci.push(atual)
  }
  if (sequenciaFibonacci.includes(valorFibonacci)){
    return `O número ${valorFibonacci} pertence a sequência de Fibonacci`
  }
  return `O número ${valorFibonacci} não pertence a sequência de Fibonacci`
}

console.log(fibonnaci(21));