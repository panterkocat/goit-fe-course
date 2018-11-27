'use strict'

const galleryItems = [
    { preview: 'img/foto4small.jpeg', fullview: 'img/foto4big.jpeg', alt: "alt text 4" },
    { preview: 'img/foto2small.jpeg', fullview: 'img/foto2big.jpeg', alt: "alt text 2" },
    { preview: 'img/foto3small.jpeg', fullview: 'img/foto3big.jpeg', alt: "alt text 3" },
    { preview: 'img/foto1small.jpeg', fullview: 'img/foto1big.jpeg', alt: "alt text 1" },
    { preview: 'img/foto5small.jpeg', fullview: 'img/foto5big.jpeg', alt: "alt text 5" },
    { preview: 'img/foto6small.jpeg', fullview: 'img/foto6big.jpeg', alt: "alt text 6" },
  ];

// create gallery from array
  function createImg({
    previeww = '',
    fullvieww = '',
    altt = '',
  }) {
    const list = document.querySelector('.preview');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', previeww);
    img.setAttribute('data-fullview', fullvieww);
    img.setAttribute('alt', altt);

    list.append(li);
    li.append(img);

    return li;
  };

 function creationGallery(array) {
     const arrElm = [];
     array.forEach(element => {
         const item = createImg({
           previeww: element.preview,
           fullvieww: element.fullview,
           altt: element.alt,
         });
         arrElm.push(item);        
     });
     const listUl = document.querySelector('.preview');
     listUl.append(...arrElm);
 };

 creationGallery(galleryItems);

//  create listener

const listt = document.querySelector('.preview');
listt.addEventListener('click', bigImage);

function bigImage(event) {
event.preventDefault();
const fullwindow = document.querySelector('.fullview');
const target = event.target;
if (target.nodeName !== 'IMG') return;
const dataAtribute = target.getAttribute('data-fullview');
fullwindow.firstElementChild.setAttribute('src', dataAtribute);
fullwindow.firstElementChild.setAttribute('alt', target.alt);
};

function createBigDefault() {
  const mainDiv = document.querySelector('.fullview');
  const newImg = document.createElement('img');
  const ulList = document.querySelector('.preview');
  const firstLi = ulList.firstElementChild;
  const firsImgBig = firstLi.firstElementChild.getAttribute('data-fullview');
  const firsImgAlt = firstLi.firstElementChild.getAttribute('alt');
  newImg.setAttribute('src', firsImgBig);
  newImg.setAttribute('alt', firsImgAlt);
  mainDiv.append(newImg);
  };
  window.addEventListener('DOMContentLoaded', createBigDefault);



  



