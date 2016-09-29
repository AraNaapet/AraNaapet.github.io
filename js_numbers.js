function rhymes_numbers() {
	document.getElementById('result').innerHTML= "";
    for (i = 1; i <= 10; i++) {
        document.getElementById('result').innerHTML += i + '<br>';
    }
}
function show_numbers() {
	document.getElementById('result').innerHTML= "";
    for (i = 10; i >= 1; i--) {
        document.getElementById('result').innerHTML += i + '<br>';
    }
}   
function even_numbers() {
	document.getElementById('result').innerHTML= "";
    for (i = 35; i <= 84; i++) {
        if (i % 2 == 0) {
            document.getElementById('result').innerHTML += i + '<br>';
        }
    }
}
function odd_numbers() {
	document.getElementById('result').innerHTML= "";
    for (i = 61; i <= 143; i++) {
        if (i % 2 != 0) { 
            document.getElementById('result').innerHTML += i + '<br>';
        }
    }
}
function check_numbers() {
	document.getElementById('result').innerHTML= "";
    var a, b, bool;

    a = +prompt('Введите цифру!', a);
    b = +prompt('Введите цифру, чтобы была больше первой!', b);
    bool = confirm('True/False');
    if (typeof a == 'number' && typeof b == 'number' && typeof bool == 'boolean') {
        if (a < b) {
            if (bool == true) {
                for (i = a; i <= b; i++) {
                    if (i % 2 == 0) {
                        document.getElementById('result').innerHTML += i + '<br>';
                    }
                }
            } else {
                for (i = a; i <= b; i++) {
                    if (i % 2 != 0) {
                        document.getElementById('result').innerHTML += i + '<br>';
                    }
                }
            }
        }
        else {
            document.getElementById('result').innerHTML = 'Ошибка!';
        }
    } else {
        document.getElementById('result').innerHTML = 'Ошибка!';
    }
}
function row_numbers() {
	document.getElementById('result').innerHTML= "";
    var symbol, row, answer;
    var str = '';

    symbol = prompt('Введите любой символ!', symbol);
    row = prompt('Введите любое количество строк!', row);
    answer = confirm('Если хотите получить треугольник нжмите "OK", А если квадрат нажмите "CANCEL"');

    if (symbol != '' || row != '') {
        if (answer == true) {
            for (var i = 0; i < row; i++) {
                str += symbol;
                document.getElementById('result').innerHTML += str + '<br>';
            }
        }
        else {
            for (i = 0; i < row; i++) str += symbol;
            for (i = 0; i < row; i++) document.getElementById('result').innerHTML += str + '<br>';
        }
    }
    else {
        document.getElementById('result').innerHTML = 'Symbol or line empty!';
    }
}
