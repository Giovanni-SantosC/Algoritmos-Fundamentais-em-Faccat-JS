/* A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas). */

let salarioHora = parseFloat(prompt("Digite o quanto recebe por hora: "))
let horasTrabalhadas = parseInt(prompt("Digite o quanto de horas trabalhou no mês: "))

if (horasTrabalhadas > 160){
    let horasExtras = horasTrabalhadas - 160
    let valorHorasExtras = (horasExtras * salarioHora) + (horasExtras * salarioHora / 2)
    let salarioTotal = (salarioHora * 160) + valorHorasExtras
    console.log(`Valor total do seu salário é ${salarioTotal}`)
}
else{
    console.log(`Valor total do seu salário é ${salarioHora * horasTrabalhadas}`)
}