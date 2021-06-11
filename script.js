const previews = document.querySelectorAll(".preview");
const previewSkill = document.querySelector(".preview-skills");
const previewProject = document.querySelector(".preview-projects");
const previewContact = document.querySelector(".preview-contacts");
const htmlIcon = document.querySelector(".fa-html5");
const cssIcon = document.querySelector(".fa-css3");
const jsIcon = document.querySelector(".fa-js");
const reactIcon = document.querySelector(".fa-react");

const downBtn = document.querySelector(".fa-chevron-down");

downBtn.addEventListener("click", () => scrollIntoView("#main"));

// preview에서 선택하는대로 해당 section으로 스크롤 이동
previews.forEach((preview) => {
  preview.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.set;

    if (link == null) {
      return;
    }
    scrollIntoView(link);
  });
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  console.log(scrollTo);
  if (selector === "#home") {
    // selector가 home일 경우는 그냥 스크롤 맨 위로 보내기
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// skills에 마우스 올리면 효과
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

// projects
const projectBtnContainer = document.querySelector(".project-categories");
const projectListContainer = document.querySelector(".project-list");
const projectResults = document.querySelectorAll(".project-result");

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

  // data-filter 로 거르기
  projectResults.forEach((result) => {
    if (filter === "*" || filter === result.dataset.type) {
      result.classList.remove("invisible");
    } else {
      result.classList.add("invisible");
    }
  });
});

// Show 'arrow-up' button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
const flame = document.querySelector(".flame");
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
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
