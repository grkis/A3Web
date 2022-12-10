/* DESCRIPTION: CUSTOM JS FILE */

/* OWNER: Ryan. Reference: https://www.w3schools.com/howto/howto_js_topnav.asp */
/* BACK TO TOP BUTTON */

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* OWNER: Grace */
/* Button*/
//document.getElementById("myButton").onclick = 

function myButton() {
  window.location.href = "https://grkis.github.io/A3Web/contact.html";
}

function CButton() {
  window.location.href = "https://grkis.github.io/A3Web/ChrisProduct.html";
}

function WButton() {
  window.location.href = "https://grkis.github.io/A3Web/WillProduct.html";
}

function RButton() {
  window.location.href = "https://grkis.github.io/A3Web/hurricanemanagement.html";
}

function GButton() {
  window.location.href = "https://grkis.github.io/A3Web/bikeinfrastructure.html";
}
// Grace's page

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function TabGallery(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
