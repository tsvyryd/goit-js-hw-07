const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('ul#ingredients');
const items = [];

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredient}`;
  items.push(liEl);
});

ul.append(...items);


