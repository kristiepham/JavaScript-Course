const dropdown = document.querySelector('#playingTo');

for (let i = 5; i < 11; i++) {
    const playToOption = document.createElement('option');
    playToOption.innerText = i;
    playToOption.value = i;
    dropdown.appendChild(playToOption);
}

const p1Btn = document.querySelector('#p1');
const p2Btn = document.querySelector('#p2');
const resetBtn = document.querySelector('#reset');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

const playerWon = () => {
    if (p1Score.innerText === dropdown.value || p2Score.innerText === dropdown.value) {
        if (p1Score.innerText > p2Score.innerText) {
            p1Score.style.color = 'green';
            p2Score.style.color = 'red'; 
        } else {
            p1Score.style.color = 'red';
            p2Score.style.color = 'green'; 
        }
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Btn.style.opacity = 0.5;
        p2Btn.style.opacity = 0.5;
    }
}

const reset = () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Score.style.color = 'black';
    p2Score.style.color = 'black';
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Btn.style.opacity = 1;
    p2Btn.style.opacity = 1;
}

p1Btn.addEventListener('click', () => {
    p1Score.innerText++;
    playerWon();
});

p2Btn.addEventListener('click', () => {
    p2Score.innerText++;
    playerWon();
});

resetBtn.addEventListener('click', reset);
dropdown.addEventListener('change', reset);