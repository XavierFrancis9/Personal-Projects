"use strict";

let buttons = [document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3'), document.getElementById('button4'), document.getElementById('button5'), document.getElementById('button6'), document.getElementById('button7'), document.getElementById('button8'), document.getElementById('button9')];

let squares = [document.getElementById('square1'), document.getElementById('square2'), document.getElementById('square3'), document.getElementById('square4'), document.getElementById('square5'), document.getElementById('square6'), document.getElementById('square7'), document.getElementById('square8'), document.getElementById('square9')];



let output = '';
let turnCounter = 1;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (turnCounter % 2 !== 0) {
            output = 'X';
        } else {
            output = "O";
        }


        squares[button].style['background-color'] = 'black';
        squares[button].innerHTML = output;
    });
})