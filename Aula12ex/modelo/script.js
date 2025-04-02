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
        if (radsex[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade < 13) {
                
            }
        } else if (radsex[1].checked) {
            genero = 'Mulher'
        } 
            res.innerHTML = `Detectamos ${genero} com ${idade} anos!` 
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

