const btnOpenMenu = document.querySelector("[data-btn-open-menu]");
const btnCloseMenu = document.querySelector("[data-btn-close-menu]");
const menu = document.querySelector("[data-menu]");
const body = document.querySelector("[data-body]");

const openMenu = () => {
  menu.classList.add("active");
  body.classList.add("body-fixed");
};

const closeMenu = () => {
  menu.classList.remove("active");
  body.classList.remove("body-fixed");
};

const closeMenuOnClickOutside = (e) => {
  if (
    !e.target.classList.contains("btn-open-menu") &&
    !e.target.classList.contains("fa-bars")
  ) {
    if (!menu.contains(e.target)) {
      closeMenu();
    }
  }
};

btnOpenMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
document.addEventListener("click", closeMenuOnClickOutside);

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  breakpoints: {
    900: {
      perPage: 2,
    },
    570: {
      perPage: 1,
    },
  },
});

splide.mount();
