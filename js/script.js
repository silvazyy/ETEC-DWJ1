function exibir() {
    const gal = document.querySelector("#gal");
    // gal.innerHTML = "<h1>Hello World!</h1>";
    // gal.innerHTML = '<img src="../img/1.jpg">'
    // const numero = Math.floor(Math.random() *12) + 1
    // gal.innerHTML = numero
    // gal.innerHTML = '<img src="../img/' + numero + '.jpg">'

    let listaImagem = ""
    let numeros = new Set()
    while (numeros.size < 12) {
        let numero = Math.floor(Math.random() *12) + 1
        numeros.add(numero)
    }
    let listaNumeros = Array.from(numeros)
    listaNumeros.forEach(numero => {
        listaImagem = listaImagem + '<img src="../img/' + numero + '.jpg">'
    })
    
    gal.innerHTML = listaImagem

}

window.onload = exibir