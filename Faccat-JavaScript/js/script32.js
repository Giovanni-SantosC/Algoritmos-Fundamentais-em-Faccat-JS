/* Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */

let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo número: "))
let numero03 = parseInt(prompt("Digite o terceiro número: "))

if (numero01 > numero02 && numero01 > numero03){
    console.log(`Número maior é ${numero01}`)
}

else if (numero02 > numero01 && numero02 > numero03){
    console.log(`Número maior é ${numero02}`)
}

else{
    console.log(`Número maior é ${numero03}`)
}