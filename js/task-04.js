const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('span#value');
let value = 0;

function increment() {
  value += 1;
  counterEl.textContent = value;
}

function decrement() {
  value -= 1;
  counterEl.textContent = value;
}

decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);