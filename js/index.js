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

let slideManualIndex1 = 1;
let slideManualIndex = 1;
let slideManualIndex2 = 1;
let slideIndex = 0;
let navbarShow = true;

// Expand & Collapse Navbar
const navabrOpen = (screen) => {
  const nav = document.getElementById("navbar");
  const navSmall = document.getElementById("navbarSmall");
  const navLinks = document.getElementById("navLinks");
  const navLinksSmall = document.getElementById("navLinksSmall");

  if (screen === "small") {
    $("#navLinksSmall>a>span").removeClass("hide");
    navLinksSmall.classList.remove("centeralize");
    navSmall.classList.remove("hideSmall");
    navSmall.style.width = "30%";
  } else {
    nav.classList.remove("centeralize");
    navLinks.classList.remove("centeralize");
    $("#navLinks>a>span").removeClass("hide");
    nav.style.width = "240px";
  }
};

const navabrClose = (screen) => {
  const width = screen?.width;
  const nav = document.getElementById("navbar");
  const navSmall = document.getElementById("navbarSmall");
  const navLinks = document.getElementById("navLinks");
  const navLinksSmall = document.getElementById("navLinksSmall");
  console.log("dddd");
  if (width <= 975 || screen === "smallScreen") {
    $("#navLinksSmall>a>span").addClass("hide");
    navLinksSmall.classList.add("centeralize");
    navSmall.classList.add("hideSmall");
  } else {
    const nav = document.getElementById("navbar");
    navLinks.classList.add("centeralize");
    $("#navLinks>a>span").addClass("hide");
    nav.style = "90px";
  }
};

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

// Next/previous controls
function plusSlides2(n) {
  showManualSlides2((slideManualIndex2 += n));
}

// Thumbnail image controls
function currentSlide2(n) {
  showManualSlides2((slideManualIndex2 = n));
}
function showManualSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("socialSlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideManualIndex2 = 1;
  }
  if (n < 1) {
    slideManualIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideManualIndex2 - 1].style.display = "block";
  dots[slideManualIndex2 - 1].className += " active";
}

// Next/previous controls
function plusSlides1(n) {
  showManualSlides1((slideManualIndex1 += n));
}

// Thumbnail image controls
function currentSlide1(n) {
  showManualSlides1((slideManualIndex1 = n));
}

function showManualSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("socialSlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {
    slideManualIndex1 = 1;
  }
  if (n < 1) {
    slideManualIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideManualIndex1 - 1].style.display = "block";
  dots[slideManualIndex1 - 1].className += " active";
}

$(".dd").slick({
  rtl: true,
  infinite: false,
  swipe: true,
  touchMove: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  cssEase: "linear",
  nextArrow: ".nextItem",
  prevArrow: ".previousItem",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
});


showSlides();
showManualSlides(slideManualIndex);
showManualSlides1(slideManualIndex1);
showManualSlides2(slideManualIndex2);
document.getElementById("defaultOpen").click();
