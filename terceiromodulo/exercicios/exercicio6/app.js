function exibirTabuada(numero) {

    for(i = 1; i <= 10; i ++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    } 
}

let numero = prompt("Digite um número inteiro");
exibirTabuada(numero);