var languageKey = 'en';
// Перекладиvar translations = {
var translations = {
  en: {
    menu: {
      about: 'About US',
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
    backdrop: {
      modalText: 'Leave your contacts and we will call you back',
      nameLabel: 'Name',
      phoneLabel: 'Phone',
      commentLabel: 'Comment',
      sendButton: 'Send',
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
    
    backdrop: {
      modalText: 'დატოვეთ თქვენი კონტაქტი და ჩვენ გადმოგირეკებთ',
      nameLabel: 'სახელი',
      phoneLabel: 'ტელეფონი',
      commentLabel: 'კომენტარი',
      sendButton: 'გაგზავნა',
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
    
    backdrop: {
      modalText: 'Залиште свої контактні дані, і ми зателефонуємо вам назад',
      nameLabel: 'Ім`я',
      phoneLabel: 'Телефон',
      commentLabel: 'Коментар',
      sendButton: 'Відправити',
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
    
    backdrop: {
      modalText: 'Оставьте свои контакты и мы перезвоним вам',
      nameLabel: 'Имя',
      phoneLabel: 'Телефон',
      commentLabel: 'Комментарий',
      sendButton: 'Отправить',
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
