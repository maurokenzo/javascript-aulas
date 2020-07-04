
var miolo = [3, 4];
var vetor = [1, 2, miolo, 5, 6];
console.log(vetor); // [1, 2, [3, 4], 5, 6]
	
var miolo = [3, 4];
var vetor = [1, 2, ...miolo, 5, 6];
console.log(vetor); // [1, 2, 3, 4, 5, 6]

	
var vetor1 = ['a', 'b', 'c'];
var vetor2 = vetor1;
console.log(`vetor1 ${vetor1}`); // ['a', 'b', 'c']
console.log(`vetor2 ${vetor2} - é o vetor1 pois ficaram com mesma referência na memória`); // ['a', 'b', 'c']

vetor2.push('d');
console.log(`vetor2 ${vetor2} - arr2.push('d') - alterou os 2 vetores`); // ['a', 'b', 'c', 'd']
console.log(`vetor1 ${vetor1}`); // ['a', 'b', 'c', 'd']

var vetor2 = [...vetor1]; // Cópia de vetor1 para vetor2
vetor2.push('e');
console.log(`Copia vetor1 para vetor2 ${vetor2} - arr2.push('e') - alterou paenas vetor2`); // ['a', 'b', 'c']
console.log(`vetor1 ${vetor1}`); // ['a', 'b', 'c', 'd']

var vetor2 = ['d', 'e', 'f'];
vetor1 = vetor1.concat(vetor2);
console.log(`Concatenando com .concat() ${vetor1}`); // ['a', 'b', 'c', 'd', 'e', 'f']
	
var vetor1 = ['a', 'b', 'c'];
var vetor2 = ['d', 'e', 'f'];
vetor1 = [...vetor1, ...vetor2];
console.log(`Concatenando com spread ${vetor1}`); 
// Possível concatenar com spread ... ['a', 'b', 'c', 'd', 'e', 'f']

var vetor3 = [2, 4, 8, 6, 0];
var max = Math.max(...vetor3); // funçãi Math.max não recebe array diretamente mas pode receber spread
console.log(`vetor3 ${vetor3}`)
console.log(`Valor máximo vetor3 utilizando Math.max(...spread) ${max}`); // 8