/* DESCRIPTION: CUSTOM JS FILE */

/* Button*/
//document.getElementById("myButton").onclick = 

function myButton() {
  window.location.href = "https://grkis.github.io/A3Web/contact.html";
}

/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


// Grace's page

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
