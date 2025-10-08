/* Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da 
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */

let tipoCombustivel = prompt("Digite o tipo de combustível> (G-Gasolina ou A-álcool)")
let litrosCombustivel = parseFloat(prompt("Digite a quantidade de combustível comprado: "))

let tipoCombustivelGrande = tipoCombustivel.toUpperCase()
let gasolina = 3.30
let alcool = 2.90

if(tipoCombustivelGrande == "G" || tipoCombustivelGrande == "GASOLINA"){

    let precoLitros = gasolina * litrosCombustivel
    console.log(`Combustível comprado foi Gasolina é comprou ${litrosCombustivel}L. O total foi ${precoLitros}`)
    
}

else if(tipoCombustivelGrande == "A" || tipoCombustivelGrande == "ÁLCOOL"){

    let precoLitros = alcool * litrosCombustivel
    console.log(`Combustível comprado foi álcool é comprou ${litrosCombustivel}L. O total foi ${precoLitros}`)
    
}

else{

    console.log("Tipo de combustível não existe.")

}