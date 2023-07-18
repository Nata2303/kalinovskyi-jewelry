var hoverOverlay = document.querySelector('.hover-overlay');
var saleForOpenImg = document.querySelector('.saleForOpen-img');

saleForOpenImg.addEventListener('click', function() {
  hoverOverlay.classList.toggle('active');
});

hoverOverlay.addEventListener('click', function() {
  hoverOverlay.classList.remove('active');
});