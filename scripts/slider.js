let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display= "none";
  }

  slides[slideIndex-1].style.display = "block";
}

































// https://www.w3schools.com/howto/howto_js_slideshow.asp
// https://www.youtube.com/watch?v=FgrCb3okKhY