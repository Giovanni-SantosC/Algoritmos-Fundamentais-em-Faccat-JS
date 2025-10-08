/* Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a 
área do triângulo. */

let base = parseFloat(prompt("Digite a base do triângulo:"))
let altura = parseFloat(prompt("Digite a altura do triângulo:"))

area = base * altura / 2

console.log(`a área do seu triângulo é ${area}`)