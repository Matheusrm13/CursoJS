function Contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                 res.innerHTML += `${c} \u{1F449}`
            }
           
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
         res.innerHTML += `\u{1F3C1}`
    }
}

/*
function Contar() {
    var ini = document.getElementById('ini').value
    var fim = document.getElementById('fim').value
    var pas = document.getElementById('pas').value
    var res = document.getElementById('res')

    ini = Number(ini)
    fim = Number(fim)
    pas = Number(pas)

    if (!isNaN(ini) || !isNaN(fim) || !isNaN(pas)) {
        res.innerHTML = 'Impossivel contar!'
    }
    if (pas == 0) {
        alert('Passo inválido Considerando PASSO 1')
        pas = 1
    }
    res.innerHTML = 'Contando: <br> '
    for(var c = ini; c <= fim; c+=pas) {
        res.innerHTML += `${c} 👉`
    }

    res.innerHTML += '🏁'
}
*/
