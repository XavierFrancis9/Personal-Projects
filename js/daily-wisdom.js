"use strict";

let phrase = ["\"If it ain't on Github, it doesn't exist.\" - Jordy Muniz", "\"Hardwork beats talent, when talent doesn't work hard.\" - Unknown", "\"Speak softly and carry a big stick.\" - Franklin D. Roosevelt", "\"You don't choose a life, you live one.\" - Unknown"];
let randomIndex = Math.floor(Math.random() * phrase.length);
let randomElement = phrase[randomIndex];

myButton.addEventListener("click", () => {
    output.textContent = randomElement;
});