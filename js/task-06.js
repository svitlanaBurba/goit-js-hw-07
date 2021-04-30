const inputRef = document.querySelector('#validation-input');
const inputDataLength = Number(inputRef.dataset.length);

function checkValid(valid, invalid) {
  inputRef.classList.add(valid);
  inputRef.classList.remove(invalid);
}

const onInputBlur = event => {
  if (event.target.value.length === inputDataLength) {
    checkValid('valid', 'invalid');
    return;
  }
  checkValid('invalid', 'valid');
};

inputRef.addEventListener('blur', onInputBlur);
