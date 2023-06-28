document.addEventListener('DOMContentLoaded', function () {
  const gemCards = document.querySelectorAll('.gem-card');

  gemCards.forEach(function (gemCard) {
    const gemDescription = gemCard.querySelector('.gem-description');
    let isGemDescriptionVisible = false;

    gemCard.addEventListener('click', function () {
      if (isGemDescriptionVisible) {
        gemDescription.style.display = 'none';
        isGemDescriptionVisible = false;
      } else {
        gemDescription.style.display = 'block';
        isGemDescriptionVisible = true;
      }
    });
  });
});
