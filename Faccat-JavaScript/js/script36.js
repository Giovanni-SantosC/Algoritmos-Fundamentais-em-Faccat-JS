/* Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.  */

let time01 = prompt("Digite o nome do primeiro time: ")
let time01Gols = parseInt(prompt("Digite a quantidade de gols que o primeiro time marcou: "))
let time02 = prompt("Digite o nome do segundo time: ")
let time02Gols = parseInt(prompt("Digite a quantidade de gols que o segundo time marcou: "))

if(time01Gols > time02Gols){
    console.log(`O jogo foi ${time01Gols} X ${time02Gols}, ${time01} foi o GANHADOR!!`)
}

else if(time02Gols > time01Gols){
    console.log(`O jogo foi ${time02Gols} X ${time01Gols}, ${time02} foi o GANHADOR!!`)
}

else{
    console.log(`O jogo foi ${time01Gols} X ${time02Gols}, tivemos um empate!!`)
}