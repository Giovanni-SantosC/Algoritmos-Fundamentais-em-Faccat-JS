/* Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
dos outros 2 lados. */

let valorA = parseFloat(prompt("Digite o primeiro lado do triângulo :"))
let valorB = parseFloat(prompt("Digite o segundo lado do triângulo :"))
let valorC = parseFloat(prompt("Digite o terceiro lado do triângulo :"))

if(valorA + valorB > valorC && valorA + valorC > valorB && valorB + valorC > valorA){
    console.log("é um triângulo")
}

else {
    console.log("não é um triângulo")
}

