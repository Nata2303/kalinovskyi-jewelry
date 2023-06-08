fetch('translations.json')
  .then(response => response.json())
  .then(translations => {
    const currentLanguage = 'en'; // Здесь указываете текущий язык

    const menuTranslations = translations[currentLanguage].menu;
    const socialMediaTranslations = translations[currentLanguage].socialMedia;
    const languageTranslations = translations[currentLanguage].language;

    // Используйте переводы для каждой категории меню
    document.getElementById('about-link').innerText = menuTranslations.about;
    document.getElementById('contact-link').innerText =
      menuTranslations.contact;
    document.getElementById('catalog-link').innerText =
      menuTranslations.catalog;
    document.getElementById('stock-link').innerText = menuTranslations.stock;
    document.getElementById('gallery-link').innerText =
      menuTranslations.gallery;
    document.getElementById('blogAboutStones-link').innerText =
      menuTranslations.blogAboutStones;
    document.getElementById('contactManager-link').innerText =
      menuTranslations.contactManager;

    // Используйте переводы для социальных медиа
    document.getElementById('facebook-link').innerText =
      socialMediaTranslations.facebook;
    document.getElementById('instagram-link').innerText =
      socialMediaTranslations.instagram;

    // Используйте переводы для языков
    document.getElementById('en-language').innerText = languageTranslations.en;
    document.getElementById('ge-language').innerText = languageTranslations.ge;
    document.getElementById('ua-language').innerText = languageTranslations.ua;
    document.getElementById('ru-language').innerText = languageTranslations.ru;
  })
  .catch(error => {
    console.error('Ошибка загрузки файла JSON:', error);
  });
