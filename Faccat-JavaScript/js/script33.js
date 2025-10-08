/* Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
maiores.  */


let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo número: "))
let numero03 = parseInt(prompt("Digite o terceiro número: "))

if (numero01 < numero02 && numero01 < numero03){
    console.log(`A soma dos dois maiores que são ${numero02},${numero03} é ${numero02 + numero03}`)
}

else if (numero02 < numero01 && numero02 < numero03){
     console.log(`A soma dos dois maiores que são ${numero01},${numero03} é ${numero01 + numero03}`)
}

else{
     console.log(`A soma dos dois maiores que são ${numero01},${numero02} é ${numero01 + numero02}`)
}