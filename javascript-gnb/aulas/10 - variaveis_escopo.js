var variavel = "Macris"
const fixo = 10

function exibe () {
    let variavel = "Gabi" // let declara dentro do escopo da função ou bloco
    let fixo = 100 
    //fixo = 20 // Falha ao receber pois fixo foi declarado como const
    console.log(`Resultado de fixo DENTRO da FUNÇÃO ${fixo}`);
    console.log(`Resultado DENTRO da FUNÇÃO ${variavel}`);
    if (true) {
        let variavel = "Bia"
        console.log(`Resultado DENTRO do IF ${variavel}`);
    }
    console.log(`Resultado DENTRO DA FUNÇÃO Depois do IF sou a ${variavel}`)
}
console.log(exibe());

// se não for utilizado let dentro da função ou bloco 
// a variável é alterada e reflete ao retornar para escopo global
console.log(`Resultado FORA da função ${variavel}`); 

console.log(`REsultado de fixo FORA da função ${fixo}`)
