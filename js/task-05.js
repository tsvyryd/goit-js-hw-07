const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if(event.currentTarget.value){
      spanEl.textContent = event.currentTarget.value;
    } else {
      spanEl.textContent = 'незнакомец';
    }  
}