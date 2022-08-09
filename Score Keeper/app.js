const dropdown = document.querySelector('#playingTo');

for (let i = 5; i < 11; i++) {
    const playToOption = document.createElement('option');
    playToOption.innerText = i;
    playToOption.value = i;
    dropdown.appendChild(playToOption);
}

class Player {
    constructor(buttonId, scoreId) {
        this.button = document.querySelector(buttonId);
        this.score = document.querySelector(scoreId);
    }
}

const p1 = new Player('#p1', '#p1Score');
const p2 = new Player('#p2', '#p2Score');
const resetBtn = document.querySelector('#reset');

const playerScored = (player, opponent) => {
    player.score.innerText++;
    if (player.score.innerText === dropdown.value) {
        player.score.style.color = 'green';
        opponent.score.style.color = 'red';
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.button.style.opacity = 0.5;
        opponent.button.style.opacity = 0.5;
    }
}

const reset = () => {
    for (let player of [p1, p2]) {;
        player.score.innerText = 0;
        player.score.style.color = 'black';
        player.button.disabled = false;
        player.button.style.opacity = 1;
    }
}

p1.button.addEventListener('click', () => playerScored(p1, p2));
p2.button.addEventListener('click', () => playerScored(p2, p1));
resetBtn.addEventListener('click', reset);
dropdown.addEventListener('change', reset);