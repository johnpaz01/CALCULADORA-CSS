let isResultUndefined = false;

function insert(num) {
    if (isResultUndefined) {
        clean();
        isResultUndefined = false;
    }
    document.getElementById('resultado').innerHTML += num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
    isResultUndefined = false;
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    if(resultado == "undefined"){
        document.addEventListener('keydown', function(event) {
        clean();
        });
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (key === '.') {
        insert('.');
    } else if (key === '+') {
        insert('+');
    } else if (key === '-') {
        insert('-');
    } else if (key === '*') {
        insert('*');
    } else if (key === '/') {
        insert('/');
    } else if (key === 'Enter') {
        calcular();
    } else if (key === 'Backspace') {
        back();
    } else if (key.toLowerCase() === 'c') {
        clean();
    }
});
