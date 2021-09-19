const previews = document.querySelectorAll(".preview");
const previewSkill = document.querySelector(".preview-skills");
const previewProject = document.querySelector(".preview-projects");
const previewContact = document.querySelector(".preview-contacts");

const home_lines = document.querySelectorAll(".home-wrap .line");
window.addEventListener("DOMContentLoaded", function () {
  home_lines.forEach((line) => (line.style.width = "400px"));
});

const downBtn = document.querySelector(".down");

downBtn.addEventListener("click", () => scrollIntoView("#main"));

// preview에서 선택하는대로 해당 section으로 스크롤 이동
previews.forEach((preview) => {
  preview.addEventListener("click", (event) => {
    let target = event.target;
    if (
      target.classList.contains("buttons-container") ||
      target.classList.contains("this")
    ) {
      // project 일 때 는 button container로,
      // media query 적용되었을 때는 span으로 인식한다.
      target = event.target.parentNode;
    }
    const link = target.dataset.set;
    console.log(target);

    if (link == null) {
      return;
    }
    scrollIntoView(link);
  });
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  if (selector === "#home") {
    // selector가 home일 경우는 그냥 스크롤 맨 위로 보내기
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// projects
const projectBtnContainer = document.querySelector(".project-categories");
const projectListContainer = document.querySelector(".project-list");
const projectsListWrapContainer = document.querySelector(".projects-list-wrap");
const projectResults = document.querySelectorAll(".project-each");

projectBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;

  console.log(filter);

  if (filter == null) {
    return;
  }

  // 전에 선택되었던 카테고리 selected 해제
  const catBtns = document.querySelectorAll(".category-btn");
  console.log(catBtns);
  catBtns.forEach((btn) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    }
  });
  // 선택된 버튼에 selected 추가
  e.target.classList.add("selected");

  // project list wrap에 효과 주기
  // projectsListWrapContainer.classList.add("anim-out");
  projectResults.forEach((result) => {
    result.classList.add("anim-out");
  });
  setTimeout(() => {
    projectResults.forEach((result) => {
      result.classList.remove("anim-out");
    });
  }, 250);

  // data-filter 로 거르기
  projectResults.forEach((result) => {
    if (filter === "*" || filter === result.dataset.type) {
      result.classList.remove("invisible");
    } else {
      result.classList.add("invisible");
    }
  });
});

// previewProject 넘기기
const imageContainer = document.querySelector(".image-container");
const pre_projects = document.querySelectorAll(".image-container .each-image");
const btnContainer = document.querySelector(".buttons-container");
const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");

let idx = 0;

btnContainer.addEventListener("click", (e) => {
  if (e.target.id === "left") {
    idx--;
    changeImage();
  } else if (e.target.id === "right") {
    idx++;
    changeImage();
  }
});

function changeImage() {
  if (idx > pre_projects.length - 1) {
    //nodeList가 총 여기서는 4개 인데 idx는 0부터 시작하니까
    idx = 0;
  } else if (idx < 0) {
    idx = pre_projects.length - 1;
  }

  imageContainer.style.transform = `translateX(${
    -idx * (100 / pre_projects.length)
  }%)`; // 100%에서 preject의 개수만큼 나누어서 X를 옮긴다.
}

// Show 'arrow-up' button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
const flame = document.querySelector(".flame");
document.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    // window.innerHeight -> viewport 만큼
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
  // flame.style.opacity = "0";
  // setTimeout((flame.style.opacity = "1"), 30000);
});
arrowUp.addEventListener("click", () => {
  // scrollIntoView("#home");
  scrollIntoView("#main");
});
