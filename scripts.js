var a = "";
var b = "";
var resul;

function Soma() {

    a = document.getElementById('n1').value;
    b = document.getElementById('n2').value;
    if(a == ""){
        a = 0;
    }
    if(b == ""){
        b = 0;
    }
    resul = parseFloat(a) + parseFloat(b);
    document.getElementById('resultado').value = resul;
}

function Menos() {

    a = document.getElementById('n1').value;
    b = document.getElementById('n2').value;
    if(a == ""){
        a = 0;
    }
    if(b == ""){
        b = 0;
    }
    resul = parseFloat(a) - parseFloat(b);
    document.getElementById('resultado').value = resul;
}

function Vezes() {

    a = document.getElementById('n1').value;
    b = document.getElementById('n2').value;
    if(a == ""){
        a = 1;
    }
    if(b == ""){
        b = 1;
    }
    resul = parseFloat(a) * parseFloat(b);
    document.getElementById('resultado').value = resul;
}

function Dividir() {

    a = document.getElementById('n1').value;
    b = document.getElementById('n2').value;
    if(a == ""){
        a = 1;
    }
    if(b == ""){
        b = 1;
    }
    resul = parseFloat(a) / parseFloat(b);
    document.getElementById('resultado').value = resul;
}