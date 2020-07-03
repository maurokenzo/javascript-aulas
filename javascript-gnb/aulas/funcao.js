function parimpar(n) {
    if ( n%2 == 0 ) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(parimpar(223));

function soma (n1=0 , n2=0) { 
    //atribuido valor 0 para n1 e n2 para 
    //evitar erro se não for mpassado parâmetro 
    return n1 + n2
}

console.log(soma(2))

var v = function(x) { //atribuida função para variável
    return x*2;
}

console.log(v(10)); //passado para variável um parâmetro que executou uma função

// fatorial de 5 = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}
console.log(fatorial(5));

//RECURSIVIDADE
//5! = 5 x 4 x 3 x 2 x 1
//5! = 5 x 4!
//n! = n x (n-1)!
function fatorialRecursiva(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorialRecursiva(n - 1);
    }
}

console.log(fatorialRecursiva(5));