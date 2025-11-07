/**** Escreva o código abaixo 👇******/

function somar(a, b) {
  return a + b;
}
function multiplicar(a, b) {
  return a * b;
}
function subtrair(a, b) {
  return a - b;
}
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero"); 
  } else {
    return a / b;
  }
}
function calcularMedia(nota1, nota2, nota3, nota4) {
  const somaDasNotas = nota1 + nota2 + nota3 + nota4;
  
  return dividir(somaDasNotas, 4);
}
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par"; [cite, 62]
  } else {
    return "ímpar"; [cite, 62]
  }
}
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}
function calcularHipotenusa(cateto1, cateto2) {
  const cateto1Quadrado = elevarPotencia(cateto1, 2);
  const cateto2Quadrado = elevarPotencia(cateto2, 2);
  const somaDosQuadrados = somar(cateto1Quadrado, cateto2Quadrado);
  const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);
  
  return hipotenusa;
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
