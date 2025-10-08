/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra.  */

let quantidadeMacas = parseInt(prompt("Digite a quantidade de maças compradas: "))

if (quantidadeMacas < 12){
    console.log("Preço da maçãs é R$1,30")
    console.log("O preço total é: " + (quantidadeMacas * 1.30))
}

else{
    console.log("Preço da maçãs é R$1")
    console.log("O preço total é: " + (quantidadeMacas * 1.00))
}