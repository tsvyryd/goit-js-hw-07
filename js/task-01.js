const items = document.querySelectorAll('li.item');
console.log(`В списке ${items.length} категории.`);

items.forEach(item => console.log(`Категория: ${item.firstElementChild.textContent} 
Количество элементов: ${item.lastElementChild.children.length}`));

/*items.forEach(item => console.log(`Категория: ${item.children[0].textContent} 
Количество элементов: ${item.children[1].children.length}`));*/

/* 2-й способ
for (let i = 0; i < items.length; i += 1){
  console.log(`Категория: ${items[i].firstElementChild.textContent}\nКоличество элементов: ${items[i].lastElementChild.children.length}`);
}*/
