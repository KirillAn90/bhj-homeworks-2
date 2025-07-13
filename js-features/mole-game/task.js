let deadMoles = 0;
let missedMoles = 0;
const WIN_CONDITION = 10;
const LOSE_CONDITION = 5;

const statusElement = document.getElementById('status');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

function updateCounters() {
    deadCounter.textContent = deadMoles;
    lostCounter.textContent = missedMoles;
}

function checkGameOver() {
    if (deadMoles >= WIN_CONDITION) {
        alert('Поздравляем! Вы победили!');
        resetGame();
    } else if (missedMoles >= LOSE_CONDITION) {
        alert('Игра окончена. Вы проиграли.');
        resetGame();
    }
}

function resetGame() {
    deadMoles = 0;
    missedMoles = 0;
    updateCounters();
    clearAllMoles();
}

function clearAllMoles() {
    holes.forEach(hole => {
        hole.classList.remove('hole_has-mole');
    });
}

function spawnMole() {
    clearAllMoles();
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        randomHole.classList.add('hole_has-mole');
    setTimeout(() => {
        randomHole.classList.remove('hole_has-mole');
        spawnMole();
    }, 1000 + Math.random() * 1000);
}

holes.forEach(hole => {
    hole.addEventListener('click', function() {
        if (this.classList.contains('hole_has-mole')) {
            deadMoles++;
            this.classList.remove('hole_has-mole');
        } else {
            missedMoles++;
        }
        
        updateCounters();
        checkGameOver();
    });
});

window.addEventListener('load', () => {
    spawnMole();
    updateCounters();
});