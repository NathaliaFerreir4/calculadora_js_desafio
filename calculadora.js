
let pergunta = prompt ('Vamos fazer alguns calculos? Responda sim para prosseguir ou não para parar.');
if (pergunta == 'não'){
    alert ('Até a próxima!');
}

    
while (pergunta == 'sim'){
    alert ('Primeiramente, eu preciso que você escolha 2 números e em seguida escolha qual será a operação que irá realizar!');

let numeroUm = prompt ('Qual o primeiro número?');
let numeroDois = prompt ('Qual o segundo numero?');
let resultado = 0;

let operacao = prompt ('Qual será a operação "soma", "subtração", "divisão" ou "multiplicação"? Caso deseje encerrar, digite "sair".');
if (operacao == 'sair'){
    alert ('Até a próxima!');
    break;
}

switch (operacao){
    case 'soma': 
    resultado = Number (numeroUm) + Number(numeroDois);
    alert(resultado);
    break;
    case 'subtração': 
    resultado =  (numeroUm - numeroDois);
    alert(resultado);
    break;
    case 'divisão': 
    resultado = (numeroUm /  numeroDois);
    alert(resultado);
    break;
    case 'multiplicação': 
    resultado = (numeroUm *  numeroDois);
    alert(resultado);
    break;
}
}
