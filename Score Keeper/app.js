const dropdown = document.querySelector('#playingTo');

for (let i = 1; i < 7; i++) {
    const playToOption = document.createElement('option');
    playToOption.innerText = i;
    playToOption.value = i;
    dropdown.appendChild(playToOption);
}

