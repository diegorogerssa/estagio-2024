// 3) Descubra a lógica e complete o próximo elemento:



// a) 1, 3, 5, 7, ___

// b) 2, 4, 8, 16, 32, 64, ____

// c) 0, 1, 4, 9, 16, 25, 36, ____

// d) 4, 16, 36, 64, ____

// e) 1, 1, 2, 3, 5, 8, ____

// f) 2,10, 12, 16, 17, 18, 19, ____


// resposta:

// a) 1, 3, 5, 7, _9_ = sequencia de ímpares

// b) 2, 4, 8, 16, 32, 64, _128_ = próximo sempre é o dobro do anterior

// c) 0, 1, 4, 9, 16, 25, 36, _49_ = o próximo é a diferença entre o atual e o anterior

// d) 4, 16, 36, 64, _100_: a Diferença entre os números entra entre eles e assim a soma do anterior com o atual sempre será o próximo numero, exemplo: 4, 12(diferença), 16, 20(diferença), 36, 28(diferença), 64, 36(diferença) 100

// e) 1, 1, 2, 3, 5, 8, _13_ = sequência de fibonacci

// f) 2,10, 12, 16, 17, 18, 19, _20_: a sequencia seria baseado namultiplicação da diferença entre os numeros,  atual com a proxima resultando na diferença anterior: 8, 2, 4, 1.
