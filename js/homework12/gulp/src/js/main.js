"use strict"

let listItems = [];
const form = document.querySelector('.js-form');
const input = document.querySelector('.inputLink');
const out = document.querySelector('.list');

window.addEventListener("DOMContentLoaded", render);
function render(deleteNote) {
listItems = localStorage.listItems ? JSON.parse(localStorage.listItems) : [];
if (listItems.length === 0) {return}
else {
const sourses = document.querySelector('#list-tpl').innerHTML.trim();
const template = Handlebars.compile(sourses);
const markUp = template(listItems);
out.innerHTML = markUp;
out.addEventListener('click', deleteNote);
}}

out.addEventListener('click', deleteNote);
function deleteNote(event) {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !=='BUTTON') {return}
    else {
    const arrayValue = target.parentNode.firstElementChild.innerHTML;
    listItems = listItems.filter(item => item.text !== arrayValue);
    localStorage.listItems = JSON.stringify(listItems);
    target.parentNode.remove();
    }  
};

form.addEventListener('submit', addLink);
function addLink(event) {
    event.preventDefault();
    const inputValue = input.value;
    if(inputValue.lenght === 0) {return alert('Вы ничего не ввели')}
    else {
        const hasInArray = listItems.filter(item => item.text === inputValue);
        if (hasInArray.length > 0) {return alert('Такая ссылка уже имееться!')}
        addNewLi();
        form.reset();
}
};

function addNewLi() {
    const inputValue = input.value;
    const addToList = listItems.unshift({text: inputValue});
    const newLi = document.createElement('li');
    const newLink = document.createElement('a');
    const btn = document.createElement('button');
    const validate = /^(ftp|http|https):\/\/[^ "]+$/.test(inputValue);
    if (!validate) {return alert('Введена не ссылка!')}
    else {    
    newLink.classList.add("name");
    btn.classList.add("js-btn-del");
    newLink.innerHTML = `${inputValue}`;
    newLink.setAttribute('href', `${inputValue}`);
    newLink.setAttribute('target', '_blank');
    btn.innerHTML = "delete";
    newLi.append(newLink, btn);
    out.insertBefore(newLi, out.firstChild);
    localStorage.listItems = JSON.stringify(listItems);
    }
    };


