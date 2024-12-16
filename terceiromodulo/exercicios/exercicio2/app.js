function calcularFatorial(numero) {

    if(numero < 0) {
        return "O fatorial não está definido para números negativos";
    }
    
    let fatorial = 1;
    for(i = numero; i > 1; i--) {
        fatorial = fatorial * i;
    }
    return fatorial;
}

let numero = prompt("Digite um número");
alert("O fatorial do número digitado é: " + calcularFatorial(numero));