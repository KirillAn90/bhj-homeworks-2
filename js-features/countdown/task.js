const timerElement = document.getElementById('timer');
let secondsLeft = parseInt(timerElement.textContent);

function updateTimer() {
    secondsLeft--;
    timerElement.textContent = secondsLeft;
    if (secondsLeft <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}

let interval = setInterval(updateTimer, 1000);