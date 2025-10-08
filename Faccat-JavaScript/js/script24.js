/* Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.  */


let numero01 = parseInt(prompt("Digite o primeiro valor: "))
let numero02 = parseInt(prompt("Digite o segundo valor: "))

if(numero01 > numero02){
    console.log(`O menor número é ${numero02} o Maior número é ${numero01}`)
}

else{
    console.log(`O menor número é ${numero01} o Maior número é ${numero02}`)
}
