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

jsIcon.addEventListener("mouseover", () => {
  htmlIcon.classList.add("checked");
  cssIcon.classList.add("checked");
  jsIcon.classList.add("checked");
});

reactIcon.addEventListener("mouseover", () => {
  htmlIcon.classList.add("checked");
  cssIcon.classList.add("checked");
  jsIcon.classList.add("checked");
  reactIcon.classList.add("checked");
});

htmlIcon.addEventListener("mouseleave", () => {
  htmlIcon.classList.remove("checked");
  cssIcon.classList.remove("checked");
});

cssIcon.addEventListener("mouseleave", () => {
  htmlIcon.classList.remove("checked");
  cssIcon.classList.remove("checked");
});

jsIcon.addEventListener("mouseleave", () => {
  htmlIcon.classList.remove("checked");
  cssIcon.classList.remove("checked");
  jsIcon.classList.remove("checked");
});

reactIcon.addEventListener("mouseleave", () => {
  htmlIcon.classList.remove("checked");
  cssIcon.classList.remove("checked");
  jsIcon.classList.remove("checked");
  reactIcon.classList.remove("checked");
});
