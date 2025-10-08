/* Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores.  */

let totalEleitores = parseInt(prompt("Digite a quantidade total de eleitores: "))
let votosBrancos = parseInt(prompt("Digite o total de votos brancos: "))
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "))
let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "))

percentualVotosBrancos = (votosBrancos / totalEleitores) * 100
percentualVotosNulos = (votosNulos / totalEleitores) * 100
percentualVotosValidos = (votosValidos / totalEleitores) * 100

somaVotos = votosBrancos + votosNulos + votosValidos

if (somaVotos != totalEleitores) {
    console.log("A soma dos votos brancos,nulos e válidos é diferente de total de eleitores.")
}
else {
    console.log(`O total de eleitores é ${totalEleitores}, percentual de votos brancos é ${percentualVotosBrancos}%, Percentual de votos nulos é ${percentualVotosNulos}% e percentual de votos válidos é ${percentualVotosValidos}%`)
}



