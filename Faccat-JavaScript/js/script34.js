/* Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
crescente.  */

let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo número: "))
let numero03 = parseInt(prompt("Digite o terceiro número: "))

if (numero01 < numero02 && numero01 < numero03){

    if(numero02 > numero03){
        console.log(`A ordem crescente é ${numero01}, ${numero03}, ${numero02}`)
    }
    else{
        console.log(`A ordem crescente é ${numero01}, ${numero02}, ${numero03}`)
    }
}

else if (numero02 < numero01 && numero02 < numero03){

     if(numero01 > numero03){
        console.log(`A ordem crescente é ${numero02}, ${numero03}, ${numero01}`)
    }
    else{
        console.log(`A ordem crescente é ${numero02}, ${numero01}, ${numero03}`)
    }
}

else{
    if(numero02 > numero01){
        console.log(`A ordem crescente é ${numero03}, ${numero01}, ${numero02}`)
    }
    else{
        console.log(`A ordem crescente é ${numero03}, ${numero02}, ${numero01}`)
    }
}