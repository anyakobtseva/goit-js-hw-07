function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const arrBoxes = [];
  const initialSize = 30;
  const sizeStep = 10;
  for(let i = 0; i<amount; i++) {
    const div = document.createElement('div');
    const size = initialSize + i * sizeStep;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(div);
  }
  divBoxes.append(...arrBoxes);
}

createButton.addEventListener('click', (event) => {
  if (inputEl.value > 0 && inputEl.value < 101) {
    divBoxes.innerHTML = "";
    createBoxes(inputEl.value);
    inputEl.value = null;
  }
})

destroyButton.addEventListener('click', (event) => {
  divBoxes.innerHTML = "";
  inputEl.value = null;
})
