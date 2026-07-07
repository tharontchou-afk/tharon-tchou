const header = document.querySelector("#site-header");
const hero = document.querySelector("#hero");

if (header && hero) {
  const toggleHeader = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 80) {
      header.classList.add("is-visible");
    } else {
      header.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", toggleHeader);
  window.addEventListener("resize", toggleHeader);

  toggleHeader();
}
