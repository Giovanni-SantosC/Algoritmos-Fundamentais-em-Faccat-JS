/*  O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.  */

let custoFabricaCarro = parseFloat(prompt("Digite o custo do carro: "))

porcentagemDistribuidor = (28 / 100) * custoFabricaCarro
porcentagemImpostos = (45 / 100) * custoFabricaCarro

custoTotalCarro = custoFabricaCarro + porcentagemDistribuidor + porcentagemImpostos

console.log(`Custo do seu carro ${custoFabricaCarro}, custo do distribuidor é ${porcentagemDistribuidor}, custo dos impostos é ${porcentagemImpostos} é o custo total do seu carro é ${custoTotalCarro}`)
