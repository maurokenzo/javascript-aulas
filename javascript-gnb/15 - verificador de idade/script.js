function verificar() {
    //alert("Olá");
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("ERRO ano inválido");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada: ${idade}`;
        var genero = "";
        var img = document.createElement("img"); //cria tag <img>
        // img.setAttribute("id", "foto"); //seta id = foto para img
        // var img = document.getElementById("img#foto"); //pode usar creteElement e setAttribute
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade <= 4) {
                //bebe
                img.setAttribute("src", "bebe-m.png");
            } else if (idade <21) {
                //jovem
                img.setAttribute("src", "jovem-m.png");
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "adulto-m.png");
            } else {
                //idoso
                img.setAttribute("src", "idoso-m.png");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade <= 4) {
                //bebe
                img.setAttribute("src", "bebe-f.png");
            } else if (idade <21) {
                //jovem
                img.setAttribute("src", "jovem-f.png");
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "adulto-f.png");
            } else {
                //idoso
                img.setAttribute("src", "idoso-f.png");
            }

        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); 

    }

}
