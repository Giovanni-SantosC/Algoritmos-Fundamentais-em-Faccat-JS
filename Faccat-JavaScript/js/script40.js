/*  Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
novo com a mulher mais velha.  */

let homem01 = parseInt(prompt("Digite a idade do primeiro homem: "))
let homem02 = parseInt(prompt("Digite a idade do segundo homem: "))
let mulher01 = parseInt(prompt("Digite a idade da primeira mulher: "))
let mulher02 = parseInt(prompt("Digite a idade da segunda mulher: "))

let soma = 0

if(homem01 != homem02 && mulher01 != mulher02){

    if(homem01 > homem02 && mulher01 > mulher02){

        soma = homem01 + mulher02
        console.log(`O homem mais velho tem ${homem01} anos e a mulher mais nova tem ${mulher02}, a soma das idades é ${soma}`)

        soma = homem02 + mulher01
        console.log(`O homem mais novo tem ${homem02} anos e a mulher mais velha tem ${mulher01}, a soma das idades é ${soma}`)
    }

    else if(homem02 > homem01 && mulher02 > mulher01){

        soma = homem02 + mulher01
       console.log(`O homem mais velho tem ${homem02} anos e a mulher mais nova tem ${mulher01}, a soma das idades é ${soma}`)

       soma = homem01 + mulher02
        console.log(`O homem mais novo tem ${homem01} anos e a mulher mais velha tem ${mulher02}, a soma das idades é ${soma}`)
    }



}
