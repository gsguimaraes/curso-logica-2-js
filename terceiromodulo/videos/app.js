function preencheCampo(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {

        preencheCampo("h1", "Acertou!");

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        preencheCampo("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {

        if(chute > numeroSecreto) {

            preencheCampo("p", "O número secreto é menor");

        } else {

            preencheCampo("p", "O número secreto é maior");

        }
        limparCampo();
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * 10 + 1);
    return numeroAleatorio;
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    tentativas = 1;
}

function exibirMensagemInicial() {
    preencheCampo("h1", "Jogo do número secreto");
    preencheCampo("p", "Escolha um número entre 1 e 10");
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

exibirMensagemInicial();