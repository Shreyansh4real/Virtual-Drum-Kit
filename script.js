// Playsound function (for keypress only)
function playSound(e) {
  const audio = document.querySelector(`#${e.key}`);
  const key = document.querySelector(`.key[data-key='${e.key}']`);
  if (!audio) return; // stops the function all together
  audio.currentTime = 0; // rewinds audio to the start whenever the function is called
  audio.play();
  key.classList.add("playing");
}

// Adding Event Listener for Click Event and Playing the Sound
document.querySelectorAll(".key").forEach(function (key) {
  key.addEventListener("click", function () {
    const audio = document.getElementById(key.dataset.key);
    audio.currentTime = 0; // rewinds audio to the start whenever the function is called
    audio.play();
    key.classList.add("playing");
  });
});

// Adding Event Listener for Keydown
window.addEventListener("keydown", playSound);

// Using "transiotionend" method to remove the highlight (.playing class)
// We are not using set timeout fuction()
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

// RemoveTransition function  - which removes .playing class
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
