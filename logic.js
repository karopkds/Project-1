let point = 10;
function submit01() {
  let enterNumber = parseInt(document.getElementById('NumberEntred').value);
  let random = Math.floor(Math.random() * 10);
  if (point < 1) {
    let gameOver = confirm('GAME OVER');
    if (gameOver === true) {
      location.reload();
    }
  } else if (enterNumber != random) {
    point = point - 1;
  } else if (enterNumber == random) {
    point = point + 1;
  }
  document.getElementById('score').innerText = point;
  console.log(enterNumber);
  console.log(random);
  console.log(`###### ${point}`);
}
