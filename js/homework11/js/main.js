"use strict"

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

window.addEventListener('DOMContentLoaded', viewAllNout) ;
function viewAllNout() {
    const source = document.querySelector('#nouts').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markUp = template(laptops);
    const out = document.querySelector('.noutbooks');
    out.insertAdjacentHTML('afterbegin', markUp); 
}

let filter = { size: [], color: [], release_date: [] };
const form = document.querySelector('.js-form');

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', reset);
function reset(event) {
event.preventDefault();
form.reset();
viewAllNout();
clearFilter()
};

const filterBtn = document.querySelector('.filter');
filterBtn.addEventListener('click', filterNouts);
function filterNouts(event) {
    event.preventDefault();
    const checked = form.querySelectorAll('input[type=checkbox]:checked');
    const filterNote = [...checked].reduce((acc, item) => {acc[item.name].push(item.value);
        return acc;
    }, filter);

    const filteredNout = laptops.filter(laptop => {
    const filterSize = filterss(filter.size, String(laptop.size));
    const filterColor = filterss(filter.color, String(laptop.color));
    const filterDate = filterss(filter.release_date, String(laptop.release_date));
    return filterSize && filterColor && filterDate;
  });
  
const sourceTwo = document.querySelector('#nouts').innerHTML.trim();
const template = Handlebars.compile(sourceTwo);
const markUp = template(filteredNout);
const out = document.querySelector('.noutbooks');
out.innerHTML = '';
out.insertAdjacentHTML('afterbegin', markUp);
clearFilter();
}

function clearFilter() {
    filter = { size: [], color: [], release_date: [] };   
};

function filterss(array, value) {
  return (array.length === 0 || array.includes(value));
}