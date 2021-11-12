/*newmod*/

var newmod = document.getElementById("mynewmod");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  newmod.style.display = "block";
}

span.onclick = function() {
  newmod.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == newmod) {
    newmod.style.display = "none";
  }
}

/*Slider*/


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}


/* Slider 2*/

var slide_Index = 1;
show_Slides(slide_Index);

function plus_Slides(n) {
  show_Slides(slide_Index += n);
}

function currentSlide(n) {
  show_Slides(slide_Index = n);
}

function show_Slides(n) {
  var i;
  var slide = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slide_Index = 1}    
  if (n < 1) {slide_Index = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slide_Index-1].style.display = "block";  
  dots[slide_Index-1].className += " active";
}


