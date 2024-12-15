function preencheCampo (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

preencheCampo("h1", "Teste função de troca");