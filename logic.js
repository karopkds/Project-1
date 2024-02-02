'use strict';
const paragraph = document.querySelector('.para');
const paraContact = document.querySelector('.paraContact');
const paraClose = document.querySelector('.paraClose');
const closeBtn = document.querySelector('.closee');
const overlay = document.querySelector('.overlay');
let point = 10;
let run = 0;
function submit01() {
  let enterNumber = parseInt(document.getElementById('NumberEntred').value);
  let random = Math.floor(Math.random() * 10);
  if (point < 1) {
    let gameOver = confirm('GAME OVER');
    if (gameOver === true) {
      location.reload();
    }
  } else if (run == 5) {
    let youwin = confirm('YOU WON!!!!!');
    if (youwin === true) {
      location.reload();
    }
  } else if (enterNumber != random) {
    point = point - 1;
  } else if (enterNumber == random) {
    run = run + 1;
  }
  document.getElementById('score').innerText = point;
  document.getElementById('run').innerText = run;
  document.getElementById('randomnumber').innerText = random;
  //console.log(enterNumber);
  //console.log(random);
  //console.log(`###### ${point}`);
}

const button1 = document.querySelectorAll('.btn1');
for (let i = 0; i < button1.length; i++) {
  // console.log(button1[i].textContent);
  button1[i].addEventListener('click', function () {
    let eventbtn = button1[i].textContent;

    if (eventbtn === 'ABOUT') {
      paragraph.classList.remove('hidden');
      overlay.classList.remove('hidden');
      closeBtn.classList.remove('hidden');
      document.addEventListener('keydown', function (e) {
        console.log(e);
        if (e.key === 'Escape' && !paragraph.classList.contains('hidden')) {
          paragraph.classList.add('hidden');
          closeBtn.classList.add('hidden');
          overlay.classList.add('hidden');
        }
      });
      closeBtn.addEventListener('click', function () {
        paragraph.classList.add('hidden');
        overlay.classList.add('hidden');
        closeBtn.classList.add('hidden');
      });
    } else if (eventbtn === 'Contact') {
      paraContact.classList.remove('hidden');
      overlay.classList.remove('hidden');
      closeBtn.classList.remove('hidden');
      document.addEventListener('keydown', function (e) {
        console.log(e);
        if (e.key === 'Escape' && !paraContact.classList.contains('hidden')) {
          paraContact.classList.add('hidden');
          closeBtn.classList.add('hidden');
          overlay.classList.add('hidden');
        }
      });
      closeBtn.addEventListener('click', function () {
        paraContact.classList.add('hidden');
        closeBtn.classList.add('hidden');
        overlay.classList.add('hidden');
      });
    } else if (eventbtn === 'Close') {
      paraClose.classList.remove('hidden');
      closeBtn.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.addEventListener('keydown', function (e) {
        console.log(e);
        if (e.key === 'Escape' && !paraClose.classList.contains('hidden')) {
          paraClose.classList.add('hidden');
          closeBtn.classList.add('hidden');
          overlay.classList.add('hidden');
        }
      });
      closeBtn.addEventListener('click', function () {
        paraClose.classList.add('hidden');
        closeBtn.classList.add('hidden');
        overlay.classList.add('hidden');
      });
    }
  });
}
