var languageKey = 'en';
// Перекладиvar translations = {
var translations = {
  en: {
    hero: {
      titelHiro: 'Exquisite jewelry for true connoisseurs',
      hero: 'View catalog',
    },
  },
  ge: {
    hero: {
      titelHiro: 'დახვეწილი სამკაულები ნამდვილი მცოდნეებისთვის',
      hero: 'კატალოგის ნახვა',
    },
  },
  ua: {
    hero: {
      titelHiro: 'Вишукана ювелірна продукція для справжніх поціновувачів',
      hero: 'Переглянути каталог',
    },
  },
  ru: {
    hero: {
      titelHiro: 'Изысканная ювелирная продукция для истинных ценителей',
      hero: 'Посмотреть каталог',
    },
  },
};

// Отримати переклад за обраним ключем мови та ключем перекладу
function updateTranslations(languageKey) {

    // переклад для елементів зі секції "hero-section"
    var heroSection = document.querySelector('.hero-section');
    var heroElements = heroSection.getElementsByClassName('translate');

    for (var k = 0; k < heroElements.length; k++) {
        var heroElement = heroElements[k];
        var heroTranslationKey = heroElement.id.replace('-link', '');
        heroElement.textContent =
            translations[languageKey].hero[heroTranslationKey];
    }
}

// Змінити мову
function changeLanguage(languageKey) {
  updateTranslations(languageKey);
}

// Отримати вибрану мову з випадаючого списку
var languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function () {
  var selectedLanguage = languageSelect.value;
  changeLanguage(selectedLanguage);
});

// Початкова ініціалізація перекладів
updateTranslations('en');
