// Mudar o CSS em JavaScript
// objeto.style.atributo

let largura = 200

function increase(){
    const quadro = document.querySelector(".quadro")
    largura += 10
    quadro.style.width = `${largura}px`
}

function decrease(){
    const quadro = document.querySelector(".quadro")
    largura -= 10
    quadro.style.width = `${largura}px`
}

function color(){
    document.querySelector(".quadro").style.background = "#8B008B"
}