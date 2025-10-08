/* Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos
 seguintes requisitos deve ser satisfeito: - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos  e
 ter trabalhado no mínimo 25 anos. 
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'.  */

let codigoFuncionario = parseInt(prompt("Digite o código do funcionario"))
let dataNascimento = parseInt(prompt("Digite a data de nascimento do funcionario: "))
let dataIngressou = parseInt(prompt("Digite a data que ingressou na emprsesa: "))
let anoAtual = parseInt(prompt("Digite o seu ano atual: "))

if (anoAtual - dataNascimento >= 65) {
    console.log("Requerer Aposentadoria")
}

else if (anoAtual - dataIngressou >= 30) {
    console.log("Requerer Aposentadoria")
}

else if(anoAtual - dataNascimento >= 60 && anoAtual - dataIngressou >= 25){
    console.log("Requerer Aposentadoria")
}

else{
    console.log("Não Requerer Aposentadoria")
}