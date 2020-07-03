function gerarTab() {
    var res = window.document.querySelector("div#res");
    var num = window.document.querySelector("input#num");
    res.style.textAlign = "center";
    num = Number(num.value);
/* //TESTE
    for (i = 0; i <= 10; i ++) {
        var c = i * num;
        res.innerHTML += `${c}`;
        
    }
*/
    var meuSelect = document.createElement("select");
    meuSelect.id = "mySelect";
    meuSelect.size = 11;
    res.appendChild(meuSelect);

    for (var i = 0; i <=10; i++) {
        var c = i * num;
        var option = document.createElement("option");
        //option.value = c; //NÃO NECESSÁRIO NESTE CASO
        option.text = num + " X " + i + " = " + c;
        meuSelect.appendChild(option);
    }
}

/* //REFERÊNCIA
var myParent = document.body;

//Create array of options to be added
var array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}
}*/



function limpar() {
    var limpa = window.document.querySelector("div#res");
    limpa.innerHTML = "";    
 }