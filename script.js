const inputUsuario = document.getElementById("inputUsuario");
var expressao = '';

function press(num){
    expressao += num;
    inputUsuario.value = expressao;
}

function igual(){
    inputUsuario.value = eval(expressao);
    expressao = '';
}

function limpar(){
    expressao = '';
    inputUsuario.value = expressao;
}