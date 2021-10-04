const homeInfo = document.querySelector(".home-info");
const helloSign = document.querySelector(".hello");

homeInfo.addEventListener("animationstart", () => {
  helloSign.style.display = "none";
});

homeInfo.addEventListener("animationend", () => {
  homeInfo.innerHTML = `
  <h1>YOO JISU</h1>
  <div class="line"></div>
  <h3>
    안녕하세요.
    <br />
    <br />
    프론트엔드 신입 개발자 <span>유지수</span>입니다.
  </h3>
  <div class="line"></div>
  `;
  homeInfo.style.backgroundColor = `#5cd3ad`;
  homeInfo.style.color = `#fff`;
});

// full page scroll
fullpage.initialize("#fullpage", {
  anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
  menu: "#menu",
  css3: false,
  scrollBar: true,
  navigation: false,
  navigationTooltips: ["Intro", "Summary", "Skills", "Projects", "Contacts"],
});

const previews = document.querySelectorAll(".preview");
const previewSkill = document.querySelector(".preview-skills");
const previewProject = document.querySelector(".preview-projects");
const previewContact = document.querySelector(".preview-contacts");

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
const projectModals = document.querySelectorAll(".modal");
const modalCloseBtns = document.querySelectorAll(".closeModal");

// project swiper
let swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  debugger: true,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const previewsP = document.querySelector(".previews");

// media query in javascript
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    swiper.destroy();
    swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 30,
      debugger: true,
      centeredSlides: true,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // main-container previews
    previewsP.innerHTML = "Go To";
  } else {
    swiper.destroy();
    swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 30,
      debugger: true,
      centeredSlides: true,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    previewsP.innerHTML = "PREVIEWS";
  }
}
let x = window.matchMedia("(max-width: 800px)");
myFunction(x); // Call listener function at run time
x.addEventListener("change", () => myFunction(x)); // Attach listener function on state changes

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
      result.classList.add("swiper-slide");
      swiper.destroy();
      console.log(result);
    } else {
      result.classList.add("invisible");
      result.classList.remove("swiper-slide");
      console.log(result);
      swiper.destroy();
    }

    if (filter === "*" || filter === "Mark-up") {
      swiper.destroy();
      swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 30,
        debugger: true,
        centeredSlides: true,

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      myFunction(x);
    } else {
      // 하나 있을 때는 cetner에 몰아넣기
      projectsListWrapContainer.style.justifyContent = "center";
    }
  });
});

// modal open
projectResults.forEach((result) => {
  // click하면 modal 열리도록
  result.addEventListener("click", (e) => {
    projectModals.forEach((modal) => {
      if (modal.classList[1] === e.target.classList[1]) {
        modal.classList.remove("hidden");
      } else {
        modal.classList.add("hidden");
      }
    });
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    projectModals.forEach((modal) => {
      modal.classList.add("hidden");
      fullpage.initialize("#fullpage", {
        anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
        menu: "#menu",
        css3: false,
        scrollBar: true,
      });
    });
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

// modal description next
const modalDescription = document.querySelector(".modal-project-description");
const modalDesWrap = document.querySelector(".description-wrap");
const modalDesSpan = document.querySelector(".modal-project-description span");
const modalDesNext = document.querySelector(".description-next");

modalDesNext.addEventListener("click", () => {
  nextDescription(); // 토글로 바꾸기
});

function nextDescription() {
  modalDesWrap.style.transform = `translateX(-50%)`; // 100%에서 preject의 개수만큼 나누어서 X를 옮긴다.
}

// scroll reveal
ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false,
});

ScrollReveal().reveal(".slide-left", {
  duration: 1000,
  origin: "right",
  distance: "500px",
  easing: "ease-in-out",
  delay: 375,
});

ScrollReveal().reveal(".slide-right", {
  duration: 2000,
  origin: "left",
  distance: "500px",
  easing: "ease-in-out",
});

// home animation
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function resize() {
  var box = c.getBoundingClientRect();
  c.width = box.width;
  c.height = box.height;
}

var light = {
  x: 160,
  y: 200,
};

var colors = ["#f5c156", "#e6616b", "#5cd3ad"];

function drawLight() {
  ctx.beginPath();
  ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
  var gradient = ctx.createRadialGradient(
    light.x,
    light.y,
    0,
    light.x,
    light.y,
    1000
  );
  gradient.addColorStop(0, "#3b4654");
  gradient.addColorStop(1, "#2c343f");
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
  gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
  gradient.addColorStop(0, "#fff");
  gradient.addColorStop(1, "#3b4654");
  ctx.fillStyle = gradient;
  ctx.fill();
}

function Box() {
  this.half_size = Math.floor(Math.random() * 50 + 1);
  this.x = Math.floor(Math.random() * c.width + 1);
  this.y = Math.floor(Math.random() * c.height + 1);
  this.r = Math.random() * Math.PI;
  this.shadow_length = 2000;
  this.color = colors[Math.floor(Math.random() * colors.length)];

  this.getDots = function () {
    var full = (Math.PI * 2) / 4;

    var p1 = {
      x: this.x + this.half_size * Math.sin(this.r),
      y: this.y + this.half_size * Math.cos(this.r),
    };
    var p2 = {
      x: this.x + this.half_size * Math.sin(this.r + full),
      y: this.y + this.half_size * Math.cos(this.r + full),
    };
    var p3 = {
      x: this.x + this.half_size * Math.sin(this.r + full * 2),
      y: this.y + this.half_size * Math.cos(this.r + full * 2),
    };
    var p4 = {
      x: this.x + this.half_size * Math.sin(this.r + full * 3),
      y: this.y + this.half_size * Math.cos(this.r + full * 3),
    };

    return {
      p1: p1,
      p2: p2,
      p3: p3,
      p4: p4,
    };
  };
  this.rotate = function () {
    var speed = (60 - this.half_size) / 20;
    this.r += speed * 0.002;
    this.x += speed;
    this.y += speed;
  };
  this.draw = function () {
    var dots = this.getDots();
    ctx.beginPath();
    ctx.moveTo(dots.p1.x, dots.p1.y);
    ctx.lineTo(dots.p2.x, dots.p2.y);
    ctx.lineTo(dots.p3.x, dots.p3.y);
    ctx.lineTo(dots.p4.x, dots.p4.y);
    ctx.fillStyle = this.color;
    ctx.fill();

    if (this.y - this.half_size > c.height) {
      this.y -= c.height + 100;
    }
    if (this.x - this.half_size > c.width) {
      this.x -= c.width + 100;
    }
  };
  this.drawShadow = function () {
    var dots = this.getDots();
    var angles = [];
    var points = [];

    for (dot in dots) {
      var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
      var endX =
        dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
      var endY =
        dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
      angles.push(angle);
      points.push({
        endX: endX,
        endY: endY,
        startX: dots[dot].x,
        startY: dots[dot].y,
      });
    }

    for (var i = points.length - 1; i >= 0; i--) {
      var n = i == 3 ? 0 : i + 1;
      ctx.beginPath();
      ctx.moveTo(points[i].startX, points[i].startY);
      ctx.lineTo(points[n].startX, points[n].startY);
      ctx.lineTo(points[n].endX, points[n].endY);
      ctx.lineTo(points[i].endX, points[i].endY);
      ctx.fillStyle = "#2c343f";
      ctx.fill();
    }
  };
}

var boxes = [];

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  drawLight();

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].rotate();
    boxes[i].drawShadow();
  }
  for (var i = 0; i < boxes.length; i++) {
    collisionDetection(i);
    boxes[i].draw();
  }
  requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 20) {
  boxes.push(new Box());
}

window.onresize = resize;
c.onmousemove = function (e) {
  light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
  light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
};

function collisionDetection(b) {
  for (var i = boxes.length - 1; i >= 0; i--) {
    if (i != b) {
      var dx =
        boxes[b].x + boxes[b].half_size - (boxes[i].x + boxes[i].half_size);
      var dy =
        boxes[b].y + boxes[b].half_size - (boxes[i].y + boxes[i].half_size);
      var d = Math.sqrt(dx * dx + dy * dy);
      if (d < boxes[b].half_size + boxes[i].half_size) {
        boxes[b].half_size =
          boxes[b].half_size > 1 ? (boxes[b].half_size -= 1) : 1;
        boxes[i].half_size =
          boxes[i].half_size > 1 ? (boxes[i].half_size -= 1) : 1;
      }
    }
  }
}

// contact info copy
const contactInfos = document.querySelectorAll(".info");

contactInfos.forEach((info) => {
  info.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.style.display = "none";
    textArea.textContent = info.children[1].innerText;
    console.log(textArea);
    document.body.append(textArea);

    textArea.select();
    textArea.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(textArea.value);

    textArea.remove();
    // .info style 변경
    info.children[0].style.pointerEvents = "none";
    info.children[1].classList.add("copied");
    setTimeout(() => {
      info.children[0].style.pointerEvents = "unset";
      info.children[1].classList.remove("copied");
    }, 1000);
  });
});
