/* Ler dois valores e imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
‘Segundo maior’, caso o segundo seja maior que o primeiro.  */

let numero01 = parseInt(prompt("Digite o primeiro número: "))
let numero02 = parseInt(prompt("Digite o segundo número: "))


if(numero01 > numero02){
    console.log(`O maior número é ${numero01}`)
}

else if(numero02 > numero01){
    console.log(`O maior número é ${numero02}`)
}

else{
    console.log(`Os números digitados são iguais`)
}