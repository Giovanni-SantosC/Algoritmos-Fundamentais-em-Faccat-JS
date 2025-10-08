/* Saber se é triânngulo ou não */

let lado01 = parseFloat(prompt("Digite o primeiro lado do triângulo: "))
let lado02 = parseFloat(prompt("Digite o segundo lado do triângulo: "))
let lado03 = parseFloat(prompt("Digite o terceiro lado do triângulo: "))

if (lado01 < lado02 + lado03 && lado02 < lado01 + lado03 && lado03 < lado01 + lado02) {
    if (lado01 == lado02 && lado02 == lado03) {
        console.log("Triângulo Equilátero")
    }

    else if (lado01 == lado02 || lado02 == lado03 || lado01 == lado03) {
        console.log("Triângulo Isósceles")
    }

    else{
        console.log("Triângulo Escaleno")
    }
}

else{
    console.log("Não foi possivel formar um triângulo.")
}