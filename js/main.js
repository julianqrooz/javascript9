let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxlength = input.getAttribute("maxlength");

count.innerHTML = maxlength;

input.oninput = function () {
  count.innerHTML = maxlength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");

  progress.style.width = `${(this.value.length * 100) / maxlength}%`;
};
