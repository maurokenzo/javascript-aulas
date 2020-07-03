/*
var idade = 206;
if (idade < 16) {
    console.log("não vota");
} else if (idade < 18 || idade > 65) {
    console.log("voto opcional");
} else  {
    console.log("voto obrigatório");
}
*/

var agora = new Date();
var hora = agora.getHours();
//var hora = 2;
console.log(`Agora são ${hora} horas`)
if (hora < 6) {
    console.log("boa madrigada")
} else if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log("boa noite")
}

  

