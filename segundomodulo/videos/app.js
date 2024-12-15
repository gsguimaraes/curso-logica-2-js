function preencheCampo(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(numeroSecreto == chute);
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}

let numeroSecreto = gerarNumeroAleatorio();

preencheCampo("h1", "Jogo do número secreto");
preencheCampo("p", "Escolha um número entre 1 e 100");