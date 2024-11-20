window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};

const hamburgerMenuIcon = document.querySelector(".hamburger-menu");

const toggleMenu = () => {
  document.querySelector(".container").classList.toggle("change");
};

hamburgerMenuIcon.addEventListener("click", toggleMenu);
