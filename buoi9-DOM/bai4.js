"use strict";

function add() {
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);

    document.getElementById('result').innerHTML = number1+number2;
    return false;
}

document.getElementById('go').addEventListener('click', add);