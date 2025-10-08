/* Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */

let comecoJogo = parseInt(prompt("Digite o horario de começo do jogo: "))
let terminoJogo = parseInt(prompt("Digite o horario de termino do jogo: "))

if (comecoJogo >= terminoJogo){
    let horario = (24 - comecoJogo) + terminoJogo
    console.log(`Jogo terminou no outro dia e durou ${horario}Hrs`)
}
else{
    console.log(`Jogo terminou no mesmo dia e durou ${terminoJogo - comecoJogo}Hrs`)
}