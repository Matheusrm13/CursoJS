// Guanabara

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} foi adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adiciona valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

/*

//  Meu 

let txtn = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function adicionar() {
    let n = Number(fnum.value)

    if (fnum.value.length == 0 || n < 0 || n > 100 || valores.includes(n)) {
    alert('Insira um número válido')
} else {
    valores.push(n)
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    sel.appendChild(item)
    
    }

}
function finalizar() {
        valores.sort()
        let com = valores.length
        res.innerHTML += `Ao todo temos ${com} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi o ${valores[com]}. <br>`
        res.innerHTML += `O menor valor informado foi o ${valores[0]}. <br>`
        res.innerHTML += `Somando todos os valores, temos ${valores[.max]}`
        
}

*/
