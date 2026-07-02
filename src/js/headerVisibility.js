const header = document.querySelector("#site-header");
const hero = document.querySelector("#hero");

if (header && hero) {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        header.classList.remove("is-visible");
      } else {
        header.classList.add("is-visible");
      }
    },
    {
      threshold: 0.1,
    },
  );

  observer.observe(hero);
}
