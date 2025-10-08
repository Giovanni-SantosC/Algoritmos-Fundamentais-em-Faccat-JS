/* Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.  */

let quantidadeMacas = parseFloat(prompt("Digite quantos kgs você comprou de maça: "))
let quantidadeMorango = parseFloat(prompt("Digite quantos kgs você comprou de morango: "))

let precoMorango = 0
let precoMaca = 0
let precoKg = 0
let totalKg = quantidadeMacas + quantidadeMorango

if (quantidadeMacas <= 5 ){
    precoMaca = 1.80
}

if(quantidadeMacas > 5){
    precoMaca = 1.50
}

if(quantidadeMorango <= 5){
    precoMorango = 2.50
}

else{
    precoMorango = 2.20
}

let precoTotal = (quantidadeMacas * precoMaca) + (quantidadeMorango * precoMorango)

if (totalKg > 8 || precoTotal > 25){
    precoDesconto = precoTotal* (10 /  100)
    console.log(`A o valor sem desconto ficou ${precoTotal} e com desconto ficou ${precoTotal - precoDesconto}`)
}

else{
    console.log(`A o valor total é ${precoTotal}`)
}       