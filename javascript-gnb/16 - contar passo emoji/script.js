//alert("Olá");
function contar() {
    var ini = window.document.querySelector("input#ini");
    var fim = window.document.querySelector("input#fim");
    var pas = window.document.querySelector("input#pas");
    var res = window.document.querySelector("div#res");
    if (ini.value == "") {
        alert("Início não pode ser vazio")
    } else {

        ini = Number(ini.value);
        fim = Number(fim.value);
        pas = Number(pas.value);
        if (fim < ini) {
            alert("Fim não pode ser menor que início");
        } else if (pas < 1) {
            alert("Passo de ser maior ou igual a 1");
        } else {
        //res.innerHTML = `ini= ${ini}, fim ${fim}, pas ${pas}`;
            res.innerHTML = "<p>Resultado:</P>";
            var r = " "
            var emoji = ""
            var vezes = 1;
            for (c = ini; c <= fim; c = c + pas) {
                r = c + emoji;
                if (vezes < 20) {
                    emoji = "&#128526"
                    r = c + emoji;
                } else if (vezes < 40) {
                    emoji = "&#128548"
                    r = c + emoji;
                } else if (vezes < 60) {
                    emoji = "&#128561"
                    r = c + emoji;
                } else {
                    emoji = "&#128545"
                }
                vezes ++;
                res.innerHTML += `${r}`;
            }
        }
    }
}


