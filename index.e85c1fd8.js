fetch("translations.json").then((function(e){return e.json()})).then((function(e){var n=e.en.menu,t=e.en.socialMedia,o=e.en.language;document.getElementById("about-link").innerText=n.about,document.getElementById("contact-link").innerText=n.contact,document.getElementById("catalog-link").innerText=n.catalog,document.getElementById("stock-link").innerText=n.stock,document.getElementById("gallery-link").innerText=n.gallery,document.getElementById("blogAboutStones-link").innerText=n.blogAboutStones,document.getElementById("contactManager-link").innerText=n.contactManager,document.getElementById("facebook-link").innerText=t.facebook,document.getElementById("instagram-link").innerText=t.instagram,document.getElementById("en-language").innerText=o.en,document.getElementById("ge-language").innerText=o.ge,document.getElementById("ua-language").innerText=o.ua,document.getElementById("ru-language").innerText=o.ru})).catch((function(e){console.error("Ошибка загрузки файла JSON:",e)}));
//# sourceMappingURL=index.e85c1fd8.js.map