'use strict';

const listEl = document.querySelector(".list-container");
const line = ['좌측', '중앙', '우측'];
let html = '';

for (let i = 0; i < 3; i++) {
    html = `<ul>${line[i]}`;
    for(let j = 0; j < 20; j++) {
        html += `<li id="${i + 1}-${j + 1}"><input type="text"></input><button onclick="onClick(event)">V</button><label></label></li>`;
    }
    html += `</ul>`
    listEl.innerHTML += html;
}

function onClick(event){
    console.log(event.target.parentNode);
    event.target.parentNode.classList.toggle('active');



}

