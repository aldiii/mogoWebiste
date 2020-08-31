import runCounter from "./counter";

const isInViewport = function (el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const runCounterOnScroll = () => {
  const countersContainer = document.querySelector(".facts");
  console.log(isInViewport(countersContainer));
  if (isInViewport(countersContainer)) {
    runCounter();
    window.removeEventListener("scroll", runCounterOnScroll);
  }
};
window.addEventListener("scroll", runCounterOnScroll);
