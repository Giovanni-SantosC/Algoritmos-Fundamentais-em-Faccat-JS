/* Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que: */

let nome = prompt("Digite o nome do produto: ")
let quatidadeProduto = parseInt(prompt(`Digite a quantidade que você comprou do produto ${nome}: `))
let precoUnitario = parseFloat(prompt(`Digite o preço unitário do produto ${nome}:`))

let descontoProduto = 0
let total = quatidadeProduto * precoUnitario

if (quatidadeProduto <= 5){
    descontoProduto = 2
}

else if(quatidadeProduto > 5 && quatidadeProduto <= 10){
    descontoProduto = 3
}

else{
    descontoProduto = 5
}

let valorDesconto = total - (total * (descontoProduto / 100))

console.log(`A valor sem desconto é ${total} e com desconto é ${valorDesconto}`)