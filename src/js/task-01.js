const ulRef = document.querySelector('#categories');
// Получает ссылку на ul через id
const categories = ulRef.children;

console.log(`В списке ${categories.length} категории.`);
// Выводит длину псевдомасива ulRef.children

[...categories].forEach(category => {
  const h2Ref = category.querySelector('h2');
  const innerUlRef = category.querySelector('ul');

  console.log(
    `- Категория: ${h2Ref.textContent}\n- Количество элементов: ${innerUlRef.children.length}`,
  );
});
