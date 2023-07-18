$(document).ready(function() {
  var translations = {
    en: {
      footer: {
        timeWork: 'Working Hours: 09:00 - 21:00',
        copirate: 'All Rights Reserved © 2023. Kalinovskyi jewelry',
        contactManager: 'Contact Manager',
      },
      // Другие переводы для разных разделов
    },
    ge: {
      footer: {
        timeWork: 'სამუშაო საათები: 09:00 - 21:00',
        copirate: 'ველა უფლება დაცულია © 2023. Kalinovskyi jewelry',
        contactManager: 'ონტაქტი მენეჯერი',
      },
      // Другие переводы для разных разделов
    },
    ua: {
      footer: {
        timeWork: 'Часи роботи: 09:00 - 21:00',
        copirate: 'Усі права захищені © 2023. Kalinovskyi jewelry',
        contactManager: "Зв'язатісь з менеджером",
      },
    },
    ru: {
      footer: {
        timeWork: 'Часы работы: 09:00 - 21:00',
        copirate: 'Все права защищены © 2023. Kalinovskyi jewelry',
        contactManager: 'Связаться с менеджером',
      },
    },
  };

  function updateTranslations(languageKey) {
    var footerElements = $('.translate');
var footerSection = document.querySelector('.footer');
var footerElements = footerSection.getElementsByClassName('translate');

for (var s = 0; s < footerElements.length; s++) {
  var footerElement = footerElements[s];
  var footerTranslationKey = footerElement.id.replace('-link', '');
  footerElement.textContent =
    translations[languageKey].footer[footerTranslationKey];
}
  }

  function changeLanguage(languageKey) {
    updateTranslations(languageKey);
  }

  var languageSelect = $('#language-select');
  languageSelect.on('change', function() {
    var selectedLanguage = $(this).val();
    changeLanguage(selectedLanguage);
  });

  updateTranslations('en');
});





