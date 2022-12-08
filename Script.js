// Button General Function

var logolink='javascript:window.scrollTo(0,0)'
var ns4=document.layers
var ie4=document.all
var ns6=document.getElementById&&!document.all

function regenerate(){
window.location.reload()
}
function regenerate2(){
if (ns4)
setTimeout("window.onresize=regenerate",400)
}

if (ie4||ns6)
document.write('<span id="logo" style="position:absolute;top:-300;z-index:100">'+displayed+'</span>')

function createtext(){ //function for NS4
staticimage=new Layer(5)
staticimage.left=-300
staticimage.document.write('<a href="'+logolink+'">'+displayed+'</a>')
staticimage.document.close()
staticimage.visibility="show"
regenerate2()
staticitns()
}

function staticit(){ //function for IE4/ NS6
var w2=ns6? pageXOffset+w : document.body.scrollLeft+w
var h2=ns6? pageYOffset+h : document.body.scrollTop+h
crosslogo.style.left=w2
crosslogo.style.top=h2
}

function staticit2(){ //function for NS4
staticimage.left=pageXOffset+window.innerWidth-staticimage.document.width-28
staticimage.top=pageYOffset+window.innerHeight-staticimage.document.height-10
}

function inserttext(){ //function for IE4/ NS6
if (ie4)
crosslogo=document.all.logo
else if (ns6)
crosslogo=document.getElementById("logo")
crosslogo.innerHTML='<a href="'+logolink+'">'+displayed+'</a>'
w=ns6? window.innerWidth-crosslogo.offsetWidth-20 : document.body.clientWidth-crosslogo.offsetWidth-10
h=ns6? window.innerHeight-crosslogo.offsetHeight-15 : document.body.clientHeight-crosslogo.offsetHeight-10
crosslogo.style.left=w
crosslogo.style.top=h
if (ie4)
window.onscroll=staticit
else if (ns6)
startstatic=setInterval("staticit()",100)
}

if (ie4||ns6){
window.onload=inserttext
window.onresize=new Function("window.location.reload()")
}
else if (ns4)
window.onload=createtext

function staticitns(){ //function for NS4
startstatic=setInterval("staticit2()",90)
}

//document.getElementById("myButton").onclick = 

function myButton() {
  window.location.href = "https://grkis.github.io/A3Web/contact.html";
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
