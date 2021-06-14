const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const ul = document.querySelector('ul#ingredients');

  ingredients.forEach(ingredient => {
    const liEl = document.createElement('li'); 
    liEl.textContent = `${ingredient}`;
    ul.appendChild(liEl);
});

