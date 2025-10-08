/* Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total. */

let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "))
let valorVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas: "))

if(valorVendas > 1500){
    let separarValor = valorVendas - 1500
    let comissao3 = 1500 * (3 / 100)
    let comissao5 = separarValor * (5 / 100)
    let salarioToal = salarioFixo + comissao3 + comissao5
    console.log(`Seu salário final é de: ${salarioToal}`)
}

else{
    let comissao3 = valorVendas * (3 /100)
    salarioToal = comissao3 + salarioFixo
    console.log(`Seu salário final é de: ${salarioToal}`)
}