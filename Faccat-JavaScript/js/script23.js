/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).  */

let anoAtual = parseInt(prompt("Digite seu ano atual: "))
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "))

let idade = anoAtual - anoNascimento
console.log(`Sua data de nascimento é ${anoNascimento}, Seu ano atual é ${anoAtual} e sua idade é de: ${idade}`)