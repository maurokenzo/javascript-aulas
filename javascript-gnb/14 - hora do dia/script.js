//alert("Olá");
function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    //var hora =3;
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora  < 12) {
        //bom dia
        img.src = "manha.png"
        document.body.style.background = '#f5f38e';
    } else if (hora < 18) {
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = '#ff6739';
    } else {
        //boa noite
        img.src = "noite.png"
        document.body.style.background = '#0d0855';
    }
}


