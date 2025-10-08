/* Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. */

let idadeAnos = parseInt(prompt("Digite sua idade: "))
let mes = parseInt(prompt("Digite quantos meses se passou do seu último aniversário"))
let dias = parseInt(prompt("Digite quantos dias passou do seu último mesversário"))

idadeDias = idadeAnos * 365
mesDias = mes * 30
somaDias = idadeDias + mesDias + dias

console.log(`Sua idade em dias é ${somaDias}, sendo seus anos em dias ${idadeAnos}, seus meses ${mesDias} e dias ${dias}`)