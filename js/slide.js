const images = document.querySelectorAll('.scroller-img');
let focusIndex = 0;

function updateFocus() {
  images.forEach((img, idx) => {
    img.classList.toggle('in-focus', idx === focusIndex);
  });
}

document.getElementById('scroll-left').onclick = function() {
  focusIndex = (focusIndex - 1 + images.length) % images.length;
  updateFocus();
};
document.getElementById('scroll-right').onclick = function() {
  focusIndex = (focusIndex + 1) % images.length;
  updateFocus();
};

updateFocus();