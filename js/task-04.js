let counterValue = 0;
const spanRef = document.querySelector('#value');

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
