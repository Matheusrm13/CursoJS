// ctrl + k + s
// https://www.pexels.com/pt-br/procurar/night/

function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var min = new Date().getMinutes()
    
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png.webp'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora}:${min} da Manhã.`
        msg2.innerHTML = `Tenha um bom Dia!`
        msg2.style.color = '#0b9052'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png.jpeg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora}:${min} da Tarde.`
        msg2.innerHTML = `Tenha uma boa Tarde!`
        msg2.style.color = '#f4900e'
    } else {
        img.src = 'fotonoite.png.jpeg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora}:${min} da Noite`
        msg2.innerHTML = `Tenha uma boa Noite!`
        msg2.style.color = '#4c67c9'
    }
}


