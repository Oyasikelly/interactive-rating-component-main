// "use strict";
const wrapper = document.querySelector(".wrapper");
const Numbs = document.querySelectorAll(".Num");
const button = document.querySelector(".button");
const content_end = document.querySelector(".content-end");
const contents = document.querySelectorAll(".content");
const select_tab = document.querySelector(".select-tab");
const select = [];
Numbs.forEach((numb) => {
  numb.addEventListener("click", (e) => {
    // select rating
    const clicked = e.target.closest(".Num");
    if (!clicked) return;
    select.push(clicked.innerHTML);
    if (select.length > 5) {
      select.pop();
    }
    // Selecting Number

    const content = document.querySelector(`.content--${clicked.dataset.tab}`);

    contents.forEach((content) => {
      content.classList.remove("content--active");
    });
    content.classList.add("content--active");
    // content.classList.add("show");

    if (numb.parentNode.classList.contains("active-color")) {
      numb.classList.add("active-color");
    } else {
      Numbs.forEach((e) => e.parentNode.classList.remove("active-color"));
      numb.classList.add("active-color");
    }
  });
});

// Add Event To botton

button.addEventListener("click", () => {
  setTimeout(() => {
    wrapper.classList.add("hidden");
    content_end.classList.add("show");
    select_tab.innerHTML = `You selected ${select.length} out of 5 `;
  }, 2000);
});
