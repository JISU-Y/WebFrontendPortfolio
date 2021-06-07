const htmlIcon = document.querySelector(".fa-html5");
const cssIcon = document.querySelector(".fa-css3");
const jsIcon = document.querySelector(".fa-js");
const reactIcon = document.querySelector(".fa-react");

htmlIcon.addEventListener("mouseover", () => {
  htmlIcon.classList.add("checked");
  cssIcon.classList.add("checked");
});

cssIcon.addEventListener("mouseover", () => {
  htmlIcon.classList.add("checked");
  cssIcon.classList.add("checked");
});

htmlIcon.addEventListener("mouseleave", () => {
  htmlIcon.classList.remove("checked");
  cssIcon.classList.remove("checked");
});

cssIcon.addEventListener("mouseleave", () => {
  htmlIcon.classList.remove("checked");
  cssIcon.classList.remove("checked");
});
