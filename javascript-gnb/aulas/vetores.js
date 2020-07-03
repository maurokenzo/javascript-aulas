let num = [5 ,8 ,2 ,9 ,3 ,30 ,21, 50, 21, 23]
console.log(num)
num.sort() //ordena por string 
num.sort(function(a, b) { //function (a, b) necessária para ordenar números
    return a - b;
}) 
/*
Funciona assim: são comparados a e b, e caso:
    a comparação seja menor que zero, a é posicionado antes de b
    a comparação seja maior que zero, a é posicionado depois de b
    a comparação seja igual a zero, a e b permancem com as posições inalteradas
*/


num.push(1)
console.log(num)
console.log(num.length)
console.log(num[1])
console.log(`O valor é ${num[2]}`)
for ( let pos = 0; pos < num.length ; pos++ ) {
    console.log(`A variavel num[${pos}] é igual a ${num[pos]}`)
}

// USADO EM ARRAYS - para  posição[i] no vetor num
for ( let pos in num) {
    console.log(`Usando [for in] a variável num[${pos}] é igual a ${num[pos]}`)
}

let buscar = 5
let pos = num.indexOf(buscar)
if (pos == -1) {
    console.log("Valor não eeeexiste")
} else {
    console.log(`O valor ${buscar} está na posição ${pos}`)    
}
console.log(num)
num.sort(function(a, b) {
    return a - b;
})
console.log(num)
console.log(num.join(" - "));

function totalVetor(vetor) {
    var acumula = 0;
    for (let pos in vetor) {
        acumula += vetor[pos];
    }
    return acumula;
}
var soma = totalVetor(num)
console.log(`Resultado da função totalVetor() ${soma}`);


function mediaVetor(vetor) {
    let qElem = vetor.length
    var acumula = 0;
    for (let pos in vetor) {
        acumula += vetor[pos];
    }
    var media = acumula / qElem    
    return media;
}
var media = mediaVetor(num)
console.log(`Resultado da função mediaVetor() ${media}`);


function maiorVetor(vetor) {
    vetor.sort(function(a, b) {
        return a - b;
    }) 
    var qElem = vetor.length -1;    
    maior = vetor[qElem];
    return maior;
}

var maior = maiorVetor(num);
console.log(`Resutado da funcção maiorVetor() ${maior}`);
    
function menorVetor(vetor) {
    vetor.sort(function(a, b) {
        return a - b;
    })    
    menor = vetor[0];
    return menor;
}

var menor = menorVetor(num);
console.log(`Resutado da funcção menorVetor() ${menor}`);    

function maiorM(vetor) {
    var valor = 0;
    var tmp = 0;
    for (let pos in vetor) {
        tmp += vetor[pos];
        if (valor < tmp) {
            valor = tmp;
        }
    }
    return valor;
}
var maior = maiorM(num)
console.log(`Resultado da função maiorM() ${maior}`);

function menorM(vetor) {
    //var qElem = vetor.length;
    var valor = 20;
    var tmp = 0;
    for (let pos in vetor) {
        tmp += vetor[pos];
        if (valor < tmp) {
            valor = tmp;
        }
    } 
    tmp = 0;
    for (let pos in vetor) {
        tmp += vetor[pos];
        if (valor > tmp) {
            valor = tmp;
        }
        return valor        
    }
    return valor;
}
var menor = menorM(num)
console.log(`Resultado da função menorM() ${menor}`);
