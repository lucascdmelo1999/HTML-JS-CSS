 
function form2(){
    var texto= document.getElementsByName("texto")[0].value;
    var cadlist;
    var list = [];
    resut = document.getElementsByName("resultado")[0];
    cadlist = ("texto é : "+ texto);
    resut.innerHTML = cadlist;
    list.push(cadlist);
} 