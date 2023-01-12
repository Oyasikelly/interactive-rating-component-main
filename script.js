"use strict";

const tabContainer = document.querySelector(".rating");
const tabs = document.querySelectorAll(".Num");
const contents = document.querySelectorAll(".content");

tabContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".Num");
  console.log(clicked);
  if (!clicked) return;

  tabs.forEach((tabs) => tabs.classList.remove("num--active"));
  contents.forEach((content) => content.classList.remove("content--active"));
  clicked.classList.add("num--active");

  // active content
  const activeContent = document.querySelector(
    `.content--${clicked.dataset.tab}`
  );

  activeContent.classList.add("content--active");
  // console.log(clicked.dataset.tab);

  if (clicked.dataset.tab === "5") tabContainer.style.display = "none";
});
