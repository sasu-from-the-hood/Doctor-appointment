let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

let boxes = document.querySelectorAll(".services .box-container .box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    let paragraph = box.querySelector("p");
    paragraph.style.opacity = 1;
  });

  box.addEventListener("mouseout", () => {
    let paragraph = box.querySelector("p");
    paragraph.style.opacity = 0;
  });
});
