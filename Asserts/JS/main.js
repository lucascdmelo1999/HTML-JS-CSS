function form2(){

    var texto= document.getElementsByName("texto")[0].value;
    var cadlist;
    cadlist = (texto);

    var passaValor = function(valor){
        window.location = "consultar.html?minhaVariavel="+valor;
    }

    passaValor(cadlist);
}  