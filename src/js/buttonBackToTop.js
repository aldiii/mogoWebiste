const buttonTop = document.querySelector(".btn-top");

const showButtonOnScroll = function (event) {
  window.pageYOffset > 50
    ? buttonTop.classList.add("active")
    : buttonTop.classList.remove("active");
};

const backToTop = function (event) {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", showButtonOnScroll);
buttonTop.addEventListener("click", backToTop);
