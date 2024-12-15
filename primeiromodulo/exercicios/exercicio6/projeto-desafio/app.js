let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function informaCliqueConsole () {
    console.log("O botão foi clicado!");
}

function exibeAlerta () {
    alert("Eu amo JS!");
}

function perguntaCidade () {
    let cidade = prompt("Diga um nome de uma cidade brasileira");
    alert(`Estive em ${cidade} e lembrei-me de você!`);
}

function calculaSoma () {
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite mais um número"));

    alert(`A soma de ${numero1} + ${numero2} é igual a ${numero1 + numero2}`);
}