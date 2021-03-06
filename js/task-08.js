const controlsRef = document.querySelector('#controls');
const refs = {
  input: controlsRef.children[0],
  render: controlsRef.children[1],
  destroy: controlsRef.children[2],
};

const boxesRef = document.querySelector('#boxes');

const boxes = [];
let amount = 0;

refs.input.addEventListener('input', () => {
  amount = refs.input.value;
});

refs.render.addEventListener('click', () => {
  createBoxes(amount);
});

refs.destroy.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    const box = document.createElement('div');
    box.style.background = `rgb(${red}, ${green}, ${blue})`;

    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;

    boxes.push(box);
  }

  boxesRef.append(...boxes);
}

function destroyBoxes() {
  for (let i = 0; i < amount; i += 1) {
    boxesRef.removeChild(...boxesRef.children);
  }
}
