"use strict";

var listItems = [];
var form = document.querySelector('.js-form');
var input = document.querySelector('.inputLink');
var out = document.querySelector('.list');
window.addEventListener("DOMContentLoaded", render);

function render(deleteNote) {
  listItems = localStorage.listItems ? JSON.parse(localStorage.listItems) : [];

  if (listItems.length === 0) {
    return;
  } else {
    var sourses = document.querySelector('#list-tpl').innerHTML.trim();
    var template = Handlebars.compile(sourses);
    var markUp = template(listItems);
    out.innerHTML = markUp;
    out.addEventListener('click', deleteNote);
  }
}

out.addEventListener('click', deleteNote);

function deleteNote(event) {
  event.preventDefault();
  var target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  } else {
    var arrayValue = target.parentNode.firstElementChild.innerHTML;
    listItems = listItems.filter(function (item) {
      return item.text !== arrayValue;
    });
    localStorage.listItems = JSON.stringify(listItems);
    target.parentNode.remove();
  }
}

;
form.addEventListener('submit', addLink);

function addLink(event) {
  event.preventDefault();
  var inputValue = input.value;

  if (inputValue.lenght === 0) {
    return alert('Вы ничего не ввели');
  } else {
    var hasInArray = listItems.filter(function (item) {
      return item.text === inputValue;
    });

    if (hasInArray.length > 0) {
      return alert('Такая ссылка уже имееться!');
    }

    addNewLi();
    form.reset();
  }
}

;

function addNewLi() {
  var inputValue = input.value;
  var addToList = listItems.unshift({
    text: inputValue
  });
  var newLi = document.createElement('li');
  var newLink = document.createElement('a');
  var btn = document.createElement('button');
  var validate = /^(ftp|http|https):\/\/[^ "]+$/.test(inputValue);

  if (!validate) {
    return alert('Введена не ссылка!');
  } else {
    newLink.classList.add("name");
    btn.classList.add("js-btn-del");
    newLink.innerHTML = "".concat(inputValue);
    newLink.setAttribute('href', "".concat(inputValue));
    newLink.setAttribute('target', '_blank');
    btn.innerHTML = "delete";
    newLi.append(newLink, btn);
    out.insertBefore(newLi, out.firstChild);
    localStorage.listItems = JSON.stringify(listItems);
  }
}

;