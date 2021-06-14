const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-action="render"]');
const deleteBtn = document.querySelector('button[data-action="destroy"]');
const boxEl = document.querySelector('div#boxes');

createBtn.addEventListener('click', createCollection);
deleteBtn.addEventListener('click', deleteCollection);

const INITIAL_ITEM_SIZE = 30;

const itemSize = {
  value: INITIAL_ITEM_SIZE,
  increment() {
    this.value += 10;
  },
  reset() {
    this.value = INITIAL_ITEM_SIZE;
  },
};

function createCollection() {
  const amount = inputEl.value;
  const items = [];

  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement('div');
    divItem.style.backgroundColor = getRandomColor();
    divItem.style.width = `${itemSize.value}px`;
    divItem.style.height = `${itemSize.value}px`;
    itemSize.increment();
    items.push(divItem);
  }
  boxEl.append(...items);
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const red = getRandom(0, 255);
  const green = getRandom(0, 255);
  const blue = getRandom(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function deleteCollection() {
  boxEl.innerHTML = '';
  itemSize.reset();
  inputEl.value = '';
}
