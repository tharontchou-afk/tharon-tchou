const introOverlay = document.querySelector("#intro-overlay");

if (introOverlay) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      introOverlay.classList.add("is-hidden");
    }, 800);
  });
}
