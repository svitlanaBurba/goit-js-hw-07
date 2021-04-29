const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const onInput = event => {
  outputName.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    outputName.textContent = 'незнакомец';
  }
};

inputName.addEventListener('input', onInput);
