const headerActions = document.querySelector("#header-actions");
const menuBtn = document.querySelector("#button-menu");
const menuDropdown = document.querySelector("#menu-dropdown");
const ticketLink = document.querySelector("#ticket-link");

if (headerActions && menuBtn && menuDropdown && ticketLink) {
  const closeMenu = () => {
    headerActions.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  };

  const onClick = () => {
    const isOpen = headerActions.classList.toggle("is-open");

    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  const onKeydownEscape = (e) => {
    if (e.key !== "Escape") return;

    closeMenu();
  };

  const onLinkClick = (e) => {
    const link = e.target.closest("a.menu-dropdown-link");

    if (!link) return;

    closeMenu();
  };

  const onClickOutsideHeader = (e) => {
    const clickInsideHeader = headerActions.contains(e.target);
    if (!clickInsideHeader && headerActions.classList.contains("is-open")) {
      closeMenu();
    }
  };

  const onTicketLinkClick = () => {
    if (headerActions.classList.contains("is-open")) {
      closeMenu();
    }
  };

  menuBtn.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydownEscape);
  menuDropdown.addEventListener("click", onLinkClick);
  document.addEventListener("click", onClickOutsideHeader);
  ticketLink.addEventListener("click", onTicketLinkClick);
}
