const navbar = document.querySelector(".main-nav");
const header = document.querySelector(".header");

const changeNavbarColorOnScroll = function (event) {
  if (window.pageYOffset >= header.offsetHeight) {
    navbar.classList.add("primary");
  } else {
    navbar.classList.remove("primary");
  }
};

window.addEventListener("scroll", changeNavbarColorOnScroll);
