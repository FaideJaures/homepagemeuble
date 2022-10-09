import data from './data.json' assert {type : 'json'};

const menu = document.getElementById('menu');
const hiddenMenu = document.getElementById('hiddenMenu');
const closeBtn = document.getElementsByClassName('btnClose')[0];

menu.addEventListener('click', () => {
  document.body.classList.add('show');
  hiddenMenu.classList.add('show');

  document.body.addEventListener('mousedown', (e) => {
    let x = hiddenMenu.getBoundingClientRect().right;
    if (e.clientX > x) {

      document.body.classList.remove('show');
      hiddenMenu.classList.remove('show');
    }
  })
})

closeBtn.addEventListener('click', () => {
  document.body.classList.remove('show');
  hiddenMenu.classList.remove('show');
})

const left = document.getElementById('btnLeft');
const right = document.getElementById('btnRight');

const image = document.getElementById('image');
const titre = document.getElementById('title');
const text = document.getElementById('text');

let i = 0;
let tabImg = ["./public/desktop-image-hero-1.jpg", "./public/desktop-image-hero-2.jpg", "./public/desktop-image-hero-3.jpg"];
image.src = tabImg[i];
titre.innerText = data.elements[i].title;
text.innerText = data.elements[i].text;

left.addEventListener('click', ()=>{

  i--;

  if(i < 0) {
    i = tabImg.length - 1;
  }

  image.src = tabImg[i];

  titre.innerText = data.elements[i].title;
  text.innerText = data.elements[i].text;

})

right.addEventListener('click', ()=>{

  i++;

  if(i > tabImg.length - 1) {
    i = 0;
  }

  image.src = tabImg[i];

  titre.innerText = data.elements[i].title;
  text.innerText = data.elements[i].text;

})



