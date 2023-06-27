var languageKey = 'en';
// Переклади
var translations = {
  en: {
    menu: {
      about: 'About Us',
      contact: 'Contact',
      catalog: 'Catalog',
      stock: 'Stock',
      gallery: 'Gallery',
      blogAboutStones: 'Blog about stones',
      contactManager: 'Contact Manager',
    },
    socialMedia: {
      facebook: 'Facebook',
      instagram: 'Instagram',
    },
    language: {
      en: 'English',
      ge: 'ქართული',
      ua: 'Українська',
      ru: 'Русский',
    },
    hero: {
      titelHiro: 'Exquisite jewelry for true connoisseurs',
      hero: 'View catalog',
    },
    about: {
      titelAbout: 'ABOUT US',
      aboutText:
        '- a luxury worthy of everyone',
      listTextOne:
        "From timeless classics to fantasy author's designs. In the assortment of our store you can find both laconic and versatile models for everyday looks, as well as exclusive luxury items for a special occasion. We take into account all the wishes of our customers and follow the latest trends in jewelry fashion.",
      listTextTwo:
        'We cooperate exclusively with trusted manufacturers who have many years of experience and reputation in the jewelry market.  offers a wide selection of jewelry made of gold, silver, platinum, as well as with natural stones from around the world. Unique gifts of nature in each piece.',
      listTextThree:
        'Flawless precious jewelry at bargain prices no longer seems like a fairy tale. Special offers, discounts and promotions will make your shopping even more enjoyable.',
      listTextFour:
        'Precious metals are growing in price every year, and deposits of precious stones are gradually exhausted. In our store you can buy high quality jewelry at reasonable prices and invest your money in order to save and increase your capital.',
      listTextFive:
        'Each piece of jewelry has its own history. Buy jewelry as a gift for yourself or your loved ones. Create your own traditions, preserve family values, pass on precious jewelry by inheritance, because it is they who will never lose their greatness, but on the contrary, over the years their value and value will only increase.',
    },
  },
  ge: {
    menu: {
      about: 'ჩვენს შესახებ',
      contact: 'კონტაქტი',
      catalog: 'კატალოგი',
      stock: 'მარაგი',
      gallery: 'გალერეა',
      blogAboutStones: 'ქვის ბლოგი',
      contactManager: 'ონტაქტი მენეჯერი',
    },
    socialMedia: {
      facebook: 'ფეისბუქი',
      instagram: 'ინსტაგრამი',
    },
    language: {
      en: 'English',
      ge: 'ქართული',
      ua: 'Українська',
      ru: 'Русский',
    },
    hero: {
      titelHiro: 'დახვეწილი სამკაულები ნამდვილი მცოდნეებისთვის',
      hero: 'კატალოგის ნახვა',
    },
  },
  ua: {
    menu: {
      about: 'Про нас',
      contact: 'Контакті',
      catalog: 'Каталог',
      stock: 'Знижки',
      gallery: 'Галерея',
      blogAboutStones: 'Блог про камені',
      contactManager: "Зв'язатісь з менеджером",
    },
    socialMedia: {
      facebook: 'Facebook',
      instagram: 'Instagram',
    },
    language: {
      en: 'English',
      ge: 'ქართული',
      ua: 'Українська',
      ru: 'Русский',
    },
    hero: {
      titelHiro: 'Вишукана ювелірна продукція для справжніх поціновувачів',
      hero: 'Переглянути каталог',
    },
  },
  ru: {
    menu: {
      about: 'О нас',
      contact: 'Контакты',
      catalog: 'Каталог',
      stock: 'Акции',
      gallery: 'Галерея',
      blogAboutStones: 'Блог о камнях',
      contactManager: 'Связаться с менеджером',
    },
    socialMedia: {
      facebook: 'Facebook',
      instagram: 'Instagram',
    },
    language: {
      en: 'English',
      ge: 'ქართული',
      ua: 'Українська',
      ru: 'Русский',
    },
    hero: {
      titelHiro: 'Изысканная ювелирная продукция для истинных ценителей',
      hero: 'Посмотреть каталог',
    },
  },
};

// Отримати переклад за обраним ключем мови та ключем перекладу
function updateTranslations(languageKey) {
  var elements = document.getElementsByClassName('translate');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var translationKey = element.id.replace('-link', '');

    if (translations[languageKey].menu.hasOwnProperty(translationKey)) {
      element.textContent = translations[languageKey].menu[translationKey];
    }
  }

  // переклад для елементів зі секції "hero-section"
  var heroSection = document.querySelector('.hero-section');
  var heroElements = heroSection.getElementsByClassName('translate');

  for (var k = 0; k < heroElements.length; k++) {
    var heroElement = heroElements[k];
    var heroTranslationKey = heroElement.id.replace('-link', '');
    heroElement.textContent = translations[languageKey].hero[heroTranslationKey];
  }

  // переклад для елементів зі секції "about"
  var aboutSection = document.querySelector('.about');
  var aboutElements = aboutSection.getElementsByClassName('translate');

  for (var j = 0; j < aboutElements.length; j++) {
    var aboutElement = aboutElements[j];
    var aboutTranslationKey = aboutElement.id.replace('-link', '');
    aboutElement.textContent = translations[languageKey].about[aboutTranslationKey];
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
