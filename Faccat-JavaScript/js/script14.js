/* Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.  */

let salarioMensalAtual = parseFloat(prompt("Digite o seu salário mensal atual: "))
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "))

let percentual = (percentualReajuste / 100) * salarioMensalAtual

console.log(`Seu salário fixo por mês é ${salarioMensalAtual}, o reajuste é ${percentualReajuste}% e seu salário com reajuste é ${salarioMensalAtual + percentual}`)

