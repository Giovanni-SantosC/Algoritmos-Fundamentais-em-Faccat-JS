/*  Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos 
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo 
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: */

let nota01 = parseFloat(prompt("Digite a primeira nota: "))
let nota02 = parseFloat(prompt("Digite a segunda nota: "))
let nota03 = parseFloat(prompt("Digite a terceira nota: "))
let mediaExercicio = parseFloat(prompt("Digite a média do exercicio: "))

let mediaAproveitamente = (nota01 + (nota02 * 2) + (nota03 * 3) + mediaExercicio) / 7

if(mediaAproveitamente >= 9){
    console.log("A")
}

else if (mediaAproveitamente >= 7.5 && mediaAproveitamente < 9){
    console.log("B")
}

else if(mediaAproveitamente >= 6 && mediaAproveitamente < 7.5){
    console.log("C")
}

else{
    console.log("D")
}

