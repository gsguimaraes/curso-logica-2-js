function calcularPerimetroCircular(altura, largura) {
    return 2 * (altura + largura);
}

function calcularAreaCiruclar(altura, largura) {
    return largura * altura;
}

function exibirMedidas(altura, largura) {
    alert(`A sala retangular possuí ${calcularPerimetroCircular(altura, largura)}m de perímetro e ${calcularAreaCiruclar(altura, largura)}m de área`);
}

let altura = parseInt(prompt("Qual é a altura da sala?"));
let largura = parseInt(prompt("Qual é a largura da sala?"));
exibirMedidas(altura, largura);