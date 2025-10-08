
let numero01 = parseInt(prompt("Digite o primeiro valor: "))
let numero02 = parseInt(prompt("Digite o segundo valor: "))

total = (numero01 * numero02) + 5

if (total <= 0){
    console.log("A")
}

else if(total <= 100){
    console.log("B")
}

else{
    console.log("C")
}