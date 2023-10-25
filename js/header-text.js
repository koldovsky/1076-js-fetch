// window - BOM - Browser Object Model
// document - DOM - Document Object Model
const title = document.querySelector('.header__title');
title.style.color = 'white';

const greetings = [
    'Привіт!',
    'Вітання!',
    'Greetings',
    'Hello',
    'Hi'
];

const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

title.innerText = getRandomEl(greetings);

