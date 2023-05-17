let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-menu");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-menu");
  navbar.classList.remove("active");
};
