let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let trying = document.getElementById('try');

let randomNr = Math.floor(Math.random() * 100);

let tryingCount = 0;
trying.innerHTML = tryingCount;


function check() {
  let input = document.getElementById('userInput').value;
  if (input == randomNr) {
    output.innerHTML = `You guessed right, your number was ${randomNr}`
    alert(`You guessed right. \nGuessed number: ${randomNr} \nNumber of attempts: ${tryingCount}`);
    window.location.reload();
  } else if (input < randomNr) {
    output.innerHTML = "You gueseed too low. Try again."
    tryingCount++;
    trying.innerHTML = tryingCount;
  } else if (input > randomNr) {
    output.innerHTML = "You guessed too high."
    tryingCount++;
    trying.innerHTML = tryingCount;
  }
  document.getElementById('userInput').value = '';
}

btn.addEventListener('click', function () {
 check();
})

document.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    check();
  }
});
