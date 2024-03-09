// 5) Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

const inverter = (string) => {
  let stringInvertida = '';
  const comprimentoPalavra = string.length -1 
  for (let indice = comprimentoPalavra; indice >= 0; indice -= 1) {
    const letra = string[indice];
    stringInvertida += letra;
  }
  return stringInvertida;
}

console.log(inverter('banana'));