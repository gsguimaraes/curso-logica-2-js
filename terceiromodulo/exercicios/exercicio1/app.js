function calcularImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let peso;
let altura;

peso = prompt("Digite o seu peso: ");
altura = prompt("Digite a sua altura");

alert("O seu IMC é: " + calcularImc(peso, altura));