function insert(n) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + n;
}

function clean() {
    document.getElementById('resultado').innerHTML ='';
}

function back() {
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function cal() {
    var res = document.getElementById('resultado').innerHTML;
    if(res) {
        document.getElementById('resultado').innerHTML = eval(res)
    }else {
        window.alert('nada para calcular')
    }
}