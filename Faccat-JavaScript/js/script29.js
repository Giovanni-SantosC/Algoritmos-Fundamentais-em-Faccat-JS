/* Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.  */

let numeroConta = parseInt(prompt("Digite o número da conta: "))
let saldoConta = parseInt(prompt("Digite o saldo da conta: "))
let debitoConta = parseInt(prompt("Digite o débito da conta: "))
let creditoConta = parseInt(prompt("Digite o crédito da conta: "))

let saldoAtual = saldoConta - debitoConta + creditoConta

if (saldoAtual >= 0){
    console.log(`Número da conta ${numeroConta} tem o saldo positivo.`)
}

else{
    console.log(`Número da conta ${numeroConta} tem o saldo negativo.`)
}
