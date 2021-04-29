const inputRef = document.querySelector('#validation-input');
const inputDataLength = Number(inputRef.dataset.length);

const onInputBlur = event => {
  if (event.target.value.length === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    return;
  }
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
};

inputRef.addEventListener('blur', onInputBlur);
