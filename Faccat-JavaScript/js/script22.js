/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada. */

let nota01 = parseFloat(prompt("Digite sua primeira nota: "))
let nota02 = parseFloat(prompt("Digite sua segunda nota: "))

media = (nota01 + nota02) / 2

if (media >= 6){
    console.log(`Nota do aluno é ${media} e foi aprovado.`)
}

else{
    console.log(`Nota do aluno é ${media} e foi reprovado.`)
}