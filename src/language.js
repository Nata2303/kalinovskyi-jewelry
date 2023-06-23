// Отримуємо вибраний елемент select
const languageSelect = document.querySelector('.language-select');

// Слухаємо подію зміни вибраного значення
languageSelect.addEventListener('change', function () {
  // Отримуємо вибране значення мови
  const selectedLanguage = languageSelect.value;

  // Завантажуємо відповідний файл з перекладом
  fetch(`translations/${selectedLanguage}.json`)
    .then(response => response.json())
    .then(data => {
      // Оновлюємо текстові елементи на сторінці з використанням перекладу
      document.getElementById('about-link').textContent = data.about;
      document.getElementById('contact-link').textContent = data.contacts;
      document.getElementById('catalog-link').textContent = data.catalog;
      document.getElementById('stock-link').textContent = data.stock;
      document.getElementById('gallery-link').textContent = data.gallery;
      document.getElementById('blogAboutStones-link').textContent =
        data.blogAboutStones;
    })
    .catch(error => {
      console.log('Помилка завантаження файлу з перекладом:', error);
    });
});
