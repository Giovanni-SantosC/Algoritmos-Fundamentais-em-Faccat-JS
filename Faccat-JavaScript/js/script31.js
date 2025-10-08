/* Ler um valor e escrever se é positivo, negativo ou zero. */

let numero = parseInt(prompt("Digite um número: "))

if(numero < 0){
   console.log("Número negativo") 
}

else if(numero == 0){
    console.log("Número igual a zero")
}

else{
    console.log("Número positivo")
}