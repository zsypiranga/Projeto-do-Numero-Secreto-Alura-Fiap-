alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
//let numeroSecreto = 4;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //VARIAVEL QUE VAI GUARDAR UM NUMERO ALEATORIO GERADO PELO MATH.RANDOM MULTIPLICADO POR 10 PRA VIRAR UM NUMERO INTEIRO E PARSEINT PRA TRANSFORMAR UM NUMERO INTEIRO SEM CASAS DECIMAIS, COM MAIS 1 PRA CONTAR DE 0 A 10
console.log(numeroSecreto);
let chute;
let tentativas = 1;



//enquanto chute não for igual ao numero secreto != indiferente
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //se chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        break;
       
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }

}

/*
if(tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`);
}else{
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa.`);
}
*/

//OPERADOR TERNARIO QUE POSSA SUBTITUIR O CODIGO ACIMA || condição ? valor_se_verdadeiro : valor_se_falso
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);