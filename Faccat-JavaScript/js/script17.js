/*  Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius (baseado na fórmula abaixo):  */

let fahrenheit = parseFloat(prompt("Digite sua temperatura em fahrenheit: "))

let celsius = (fahrenheit - 32) * 5/9

console.log(celsius)