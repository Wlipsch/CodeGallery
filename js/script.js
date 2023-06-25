
const toggleButton = document.querySelector('#videoBtn');
const player = document.querySelector('#videoPlayer');

toggleButton.addEventListener('click', function () {
  if (player.classList.contains('playing')) { // als de div de class 'active' heeft
    player.classList.remove('playing'); // haal de class active dan weg
    // video is paused
    player.pause();
    toggleButton.textContent = "Play";
    toggleButton.classList.remove('active');

  } else {
    player.classList.add('playing'); // anders, voeg de class active toe
    // video is playing
    player.play();
    toggleButton.textContent = "Pause";
    toggleButton.classList.add('active');
  }
});

// carousel sjwik
let slideIndex = 1;
showSlides(slideIndex);

console.log(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");


  // let forward = document.getElementsByClassName("button-forward");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // for (i = 0; i < forward.length; i++) {
  //   forward[i].className = forward[i].className.replace(" active", "");
  // }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const navitem = document.querySelector(".navbar");
hamburger.addEventListener("click", Menu);




function Menu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}