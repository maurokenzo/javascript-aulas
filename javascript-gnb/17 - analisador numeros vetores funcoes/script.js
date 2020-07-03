//alert("Olá");
var res = window.document.querySelector("div#res");
var lista = []
function adicionar() {
    var num = window.document.querySelector("input#num");
    var sel = window.document.querySelector("select#lista");
    var item = window.document.createElement("option");
    res.innerHTML = ""
    if (num.value < 1 || num.value > 100) {
        alert("Número inválido")
    } else {
        lista.push(Number(num.value));
        item.text = num.value;
        sel.appendChild(item);
    }
}

function finalizar() {
    if (lista.length == 0) {
        //alert("Adicione números")
        res.innerHTML = "Adicione alguns números"
    } else {
        var lordenada = lista.sort(function(a, b) {
            return a - b;
        })
        let lexibe = ""
        for ( let pos in lordenada) {
            lexibe = lexibe + `${lordenada[pos]}  `
        }
    
        totalVetor(lista);
        var qtd = lista.length;
        var soma = totalVetor(lista);
        var media = mediaVetor(lista);
        var maior = maiorVetor(lista);
        var menor = menorVetor(lista);
        res.innerHTML = `Valores na lista: ${lexibe}
                        <p>Ao todo temos ${qtd} números cadastrados</p>
                        <p>O maior valor nformado é ${maior}</p>
                        <p>O menor valor informado é ${menor}</p>
                        <p>Somando todos os valores temos ${soma}</p>
                        <p>A média dos valores é ${media}</p>`;
    
    }
}


function totalVetor(vetor) {
    var acumula = 0;
    for (let pos in vetor) {
        acumula += vetor[pos];
    }
    return acumula;
}

function mediaVetor(vetor) {
    let qElem = vetor.length
    var acumula = 0;
    for (let pos in vetor) {
        acumula += vetor[pos];
    }
    var media = acumula / qElem    
    return media;
}

function maiorVetor(vetor) {
    vetor.sort(function(a, b) {
        return a - b;
    })
    var qElem = vetor.length -1;    
    maior = vetor[qElem];
    return maior;
}

function menorVetor(vetor) {
    vetor.sort(function(a, b) {
        return a - b;
    })
    menor = vetor[0];
    return menor;
}


