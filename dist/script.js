const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 6000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Merr Fryme!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Mbaje";

    setTimeout(() => {
      text.innerText = "Leshoje frymen!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
