const introOverlay = document.querySelector("#intro-overlay");
const hasSeenIntro = sessionStorage.getItem("introSeen");

if (introOverlay) {
  if (hasSeenIntro) {
    introOverlay.remove();
  } else {
    window.addEventListener("load", () => {
      setTimeout(() => {
        introOverlay.classList.add("is-hidden");
        sessionStorage.setItem("introSeen", "true");

        setTimeout(() => {
          introOverlay.remove();
        }, 600); // durée de la transition CSS
      }, 800);
    });
  }
}
