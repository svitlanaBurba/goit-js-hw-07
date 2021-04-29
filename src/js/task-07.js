const inputRangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRangeRef.value = 0;
// Сама добавила, нет в условии

inputRangeRef.addEventListener('input', () => {
  spanRef.style.fontSize = `${inputRangeRef.value}px`;
});
