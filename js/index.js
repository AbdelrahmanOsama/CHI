//   Showing date & Time
const date = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};
const time = new Intl.DateTimeFormat("en-US", options).format(date);
const currentTime = document.getElementById("currentTime");
const currentDate = document.getElementById("currentDate");
currentTime.innerHTML = time.replace("AM", "").replace("PM", "");
currentDate.innerHTML = new Intl.DateTimeFormat("ar-Us", {
  weekday: "long",
}).format(date);

let slideManualIndex = 1;
let slideIndex = 0;

// Next/previous controls
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Tabs Control
function openCity(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " activeTab";
  document.getElementById("defaultOpen").style.borderRadius = "0 8px 0 0";
  document.getElementById("nonSaudi").style.borderRadius = "8px 0 0 0";
}

// Manual Slider Control

// Next/previous controls
function plusSlides(n) {
    showManualSlides((slideManualIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showManualSlides((slideManualIndex = n));
}

function showManualSlides(n) {
  let i;
  let slides = document.getElementsByClassName("socialSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideManualIndex = 1;
  }
  if (n < 1) {
    slideManualIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideManualIndex - 1].style.display = "block";
  dots[slideManualIndex - 1].className += " active";
}
showSlides();
showManualSlides(slideManualIndex);
document.getElementById("defaultOpen").click();
