/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é:  */

let nota01 = parseFloat(prompt("Digite a primeira nota: "))
let nota02 = parseFloat(prompt("Digite a segunda nota: "))
let nota03 = parseFloat(prompt("Digite a terceira nota: "))

mediaPonderada = ((nota01 * 2) + (nota02 * 3) + (nota03 * 5)) / 10

console.log(`Sua média ponderada é ${mediaPonderada}`)