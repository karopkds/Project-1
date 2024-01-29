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
