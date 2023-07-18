document.addEventListener('DOMContentLoaded', function () {
  const hoverOverlay = document.querySelector('.hover-overlay');

  hoverOverlay.addEventListener('click', function () {
    hoverOverlay.style.visibility = 'is-hidden';
  });
});
