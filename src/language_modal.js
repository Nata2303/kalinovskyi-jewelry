var languageKey = 'en';
// Перекладиvar translations = {
var translations = {
  en: {
    backdrop: {
      modalText: 'Leave your contacts and we will call you back',
      nameLabel: 'Name',
      phoneLabel: 'Phone',
      commentLabel: 'Comment',
      sendButton: 'Send',
    },
  },
  ge: {
    backdrop: {
      modalText: 'დატოვეთ თქვენი კონტაქტი და ჩვენ გადმოგირეკებთ',
      nameLabel: 'სახელი',
      phoneLabel: 'ტელეფონი',
      commentLabel: 'კომენტარი',
      sendButton: 'გაგზავნა',
    },
  },
  ua: {
    backdrop: {
      modalText: 'Залиште свої контактні дані, і ми зателефонуємо вам назад',
      nameLabel: 'Ім`я',
      phoneLabel: 'Телефон',
      commentLabel: 'Коментар',
      sendButton: 'Відправити',
    },
  },
  ru: {
    modal: {
      text: 'Оставьте свои контакты и мы перезвоним вам',
      nameLabel: 'Имя',
      phoneLabel: 'Телефон',
      commentLabel: 'Комментарий',
      sendButton: 'Отправить',
    },
  },
};

function updateTranslations(languageKey) {
  var modalElements = document.querySelectorAll('.translate');

  modalElements.forEach(function (element) {
    var modalTranslationKey = element.id.replace('-link', '');
    element.textContent = translations[languageKey].modal[modalTranslationKey];
  });
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

