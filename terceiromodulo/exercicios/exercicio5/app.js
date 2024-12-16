function calcularPerimetroCircular(raio) {
    return 2 * (3.14 * raio);
}

function calcularAreaCiruclar(raio) {
    return 3.14 * (raio * raio);
}

function exibirMedidas(raio) {
    alert(`A sala circular possuí ${calcularPerimetroCircular(raio)}m de perímetro e ${calcularAreaCiruclar(raio)}m de área`);
}

let raio = parseInt(prompt("Qual é o raio da sala?"));

exibirMedidas(raio);