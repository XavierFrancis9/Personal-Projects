"use strict";

let phrase = ["\"If it ain't on Github, it doesn't exist.\" - Jordy Muniz", "\"Hardwork beats talent, when talent doesn't work hard.\" - Unknown", "\"Speak softly and carry a big stick.\" - Franklin D. Roosevelt", "\"You don't choose a life, you live one.\" - Unknown"];

let myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * phrase.length);
    let randomElement = phrase[randomIndex];
    let output = document.getElementById('output');

    let transbox = document.getElementById('transbox');

    transbox.style.margin = '90px';
    transbox.style['background-color'] = '#fff';
    transbox.style.border = 'none';
    transbox.style.padding = '5px';
    transbox.style.opacity = '0.6';
    transbox.style['border-radius'] = '15px';

    output.innerHTML = randomElement;
});

