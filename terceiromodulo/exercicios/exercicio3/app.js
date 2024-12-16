function converterDolarEmReal(valor) {
    let cotacaoDolar = 4.8;
    return valor * cotacaoDolar;
}

let valorEmDolar = prompt("Digite um valor em dólar")
alert(`US$ ${valorEmDolar} é equivalente a RS$${converterDolarEmReal(valorEmDolar)}`);