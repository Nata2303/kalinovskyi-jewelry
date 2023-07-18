var languageKey = 'en';
// Перекладиvar translations = {
var translations = {
  en: {
    location: {
      locationTitle: 'LOCATION',
      locationAddress: '1d floor, Tbel Abuselidze 5a , DS Mall, Batumi 6010',
      locationSuptitle: 'call us',
    },
  },
  ge: {
    location: {
      locationTitle: 'მდებარეობა',
      locationAddress: '1 სართული, ტბელ აბუსელიძის 5ა, DS Mall, ბათუმი 6010',
      locationSuptitle: 'დაგვირეკეთ',
    },
  },
  ua: {
    location: {
      locationTitle: 'ЛОКАЦІЯ',
      locationAddress: '1 поверх, Тбел Абусеридзе 5А, DS Mall, Батумі 6010',
      locationSuptitle: 'подзвони нам',
    },
  },
  ru: {
    location: {
      locationTitle: 'ЛОКАЦИЯ',
      locationAddress: '1 этаж, Тбел Абусеридзе 5А, DS Mall, Батуми 6010',
      locationSuptitle: 'позвони нам',
    },
  },
};

// Отримати переклад за обраним ключем мови та ключем перекладу
function updateTranslations(languageKey) {
    var locationSection = document.querySelector('.location');
    var locationElements = locationSection.getElementsByClassName('translate');

    for (var j = 0; j < locationElements.length; j++) {
        var locationElement = locationElements[j];
        var locationTranslationKey = locationElement.id.replace('-link', '');
        locationElement.textContent =
            translations[languageKey].location[locationTranslationKey];
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
