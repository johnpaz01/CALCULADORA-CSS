let isResultUndefined = false;
let calculationDone = false;

function insert(num) {
    if (isResultUndefined) {
        clean();
        isResultUndefined = false;
    }
    if (calculationDone) {
        clean();
        calculationDone = false;
    }
    document.getElementById('resultado').innerHTML += num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
    isResultUndefined = false;
    calculationDone = false;
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
            calculationDone = true;
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
            isResultUndefined = true;
        }
    }
    if (document.getElementById('resultado').innerHTML == "undefined") {
        isResultUndefined = true;
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (key === '.') {
        insert('.');
    } else if (key === '+') {
        calculationDone = false; // Allow for chaining operations
        insert('+');
    } else if (key === '-') {
        calculationDone = false; // Allow for chaining operations
        insert('-');
    } else if (key === '*') {
        calculationDone = false; // Allow for chaining operations
        insert('*');
    } else if (key === '/') {
        calculationDone = false; // Allow for chaining operations
        insert('/');
    } else if (key === 'Enter') {
        calcular();
    } else if (key === 'Backspace') {
        back();
    } else if (key.toLowerCase() === 'c') {
        clean();
    }
});
