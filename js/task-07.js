const inputRangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', () => {
  spanRef.style.fontSize = `${inputRangeRef.value}px`;
});
