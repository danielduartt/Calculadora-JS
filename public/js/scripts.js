
function insert(num){
    document.getElementById('resultado').innerHTML += num;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML.slice(0, -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}

module.exports = {insert, clean, back, calcular}
