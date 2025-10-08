/* Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor.  */

let numeroCarroVendidos = parseInt(prompt("Digite o número de carros vendidos: "))
let valorTotalVendas = parseFloat(prompt("Digite o total da suas vendas: "))
let salarioFixo = parseFloat(prompt("Digite o salário fixo por mês: "))
let valorCarroVendido = parseFloat(prompt("Digite o valor fixo por carro vendido"))

let comissaoCarroVendido = numeroCarroVendidos * valorCarroVendido
let percentualCarrosVendidos = (5 / 100) * valorTotalVendas

salarioTotal = salarioFixo + comissaoCarroVendido + percentualCarrosVendidos

console.log(`Seu salário total é de ${salarioTotal}`)
