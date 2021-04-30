const inputRef = document.querySelector('#validation-input');
const inputDataLength = Number(inputRef.dataset.length);

function replaceChanges(classAdd, classRemove) {
  inputRef.classList.add(classAdd);
  inputRef.classList.remove(classRemove);
}

const onInputBlur = event => {
  if (event.target.value.length === inputDataLength) {
    replaceChanges('valid', 'invalid');
    return;
  }
  replaceChanges('invalid', 'valid');
};

inputRef.addEventListener('blur', onInputBlur);
