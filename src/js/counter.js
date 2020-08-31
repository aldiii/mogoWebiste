const animationDuration = 1000;
const frameDuration = 1000 / 100;
const totalFrames = Math.round(animationDuration / frameDuration);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = +el.innerHTML;

  const counter = setInterval(() => {
    ++frame;
    const progress = frame / totalFrames;
    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }
    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, totalFrames);
};

const runCounter = () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(animateCountUp);
};

export default runCounter;
