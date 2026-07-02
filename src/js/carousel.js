// Sélectionne les cards et dots et les met sous forme de tableau
const cards = [...document.querySelectorAll(".experience-card")];
const next = document.querySelector("#carousel-next");
const prev = document.querySelector("#carousel-prev");

let currentIndex = 0;

if (cards.length > 0 && next && prev) {
  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("is-active", i === index);
    });
  }

  function updateCarousel(index) {
    currentIndex = index;
    showCard(currentIndex);
  }

  const onNext = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    updateCarousel(nextIndex);
  };

  const onPrev = () => {
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel(prevIndex);
  };

  next.addEventListener("click", onNext);
  prev.addEventListener("click", onPrev);
}
