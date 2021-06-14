const inputEl = document.querySelector('input#validation-input');
const inputElLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputChange);

function onInputChange() {
  if(inputEl.value.trim().length){
    if(inputEl.value.trim().length === inputElLength){
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  }
  
} 
