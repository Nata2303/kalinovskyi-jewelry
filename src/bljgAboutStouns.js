document.addEventListener('DOMContentLoaded', function () {
  const gemCard = document.querySelector('.gem-card');
  const gemDescription = document.querySelector('.gem-description');

  gemCard.addEventListener('click', function () {
    gemDescription.style.display = 'block';
  });
});
