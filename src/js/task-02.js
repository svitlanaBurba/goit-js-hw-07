const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsCreator = ingredients => {
  return ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    return liRef;
  });
};

const ulRef = document.querySelector('#ingredients');
const liIngredients = ingredientsCreator(ingredients);

ulRef.append(...liIngredients);
