const navE1 = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navE1.classList.add("navbar-scrolled");
  } else {
    navE1.classList.remove("navbar-scrolled");
  }
});
