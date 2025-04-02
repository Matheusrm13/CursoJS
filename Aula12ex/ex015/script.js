// ctrl + k + s
function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
       alert('[Erro] Preencha corretamente os dados!') 
    } else {
        var idade = ano - Number(fano.value)
        var radsex = document.getElementsByName('radsex')
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (radsex[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'CriançaMo.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Menino.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'Homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'Senhor.jpg')
            }
                

        } else if (radsex[1].checked) {
            genero = 'Mulher'
            if(idade > 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'CriançaMa.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Menina.jpg')
            } else if (idade < 65) {
                // Adulta
                img.setAttribute('src', 'Mulher.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'Senhora.jpg')
            }
        } 
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos!` 
            res.appendChild(img)
    }
        
}



// function Verificar() {
//     var ano = new Date().getFullYear()
//     var fano = document.getElementById('txtAno')
//     var res = document.getElementById('res')

//     if (fano.value.length == 0 || Number(fano.value) > ano) {
//         alert(`[Erro] Insira os dados corretamente!`)
//     } else {
//         var fsex = document.getElementsByName('radsex')
//         var idade = ano - Number(fano.value)
//         var genero = ''
//         if (fsex[0].checked) {
//             genero = 'Homem'
//         } else if (fsex[1].checked) {
//             genero = 'Mulher'
//         } 
//         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
//     }
// }

