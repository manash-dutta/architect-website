const hamburgerMenuIcon = document.querySelector(".hamburger-menu");

const toggleMenu = () => {
  document.querySelector(".container").classList.toggle("change");
};

hamburgerMenuIcon.addEventListener("click", toggleMenu);
