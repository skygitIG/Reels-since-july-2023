"use strict";

const customCheckboxes = document.querySelectorAll(".custom-checkbox");
const checkboxInputs = document.querySelectorAll(".custom-checkbox input");
const customInputs = document.querySelectorAll(".input.custom");


function checkboxChecker(ele) {
  const labelName = ele.parentElement
    .querySelector("label")
    .innerHTML.toLowerCase();

  switch (labelName) {
    case "fast": {
      customCheckboxes[0].classList.add("active");
      customInputs[0].classList.add("active");

      customCheckboxes[1].classList.remove("active");
      customInputs[1].classList.remove("active");

      customCheckboxes[2].classList.remove("active");
      customInputs[2].classList.remove("active");
      break;
    }

    case "cheap": {
      customCheckboxes[0].classList.remove("active");
      customInputs[0].classList.remove("active");

      customCheckboxes[1].classList.add("active");
      customInputs[1].classList.add("active");

      customCheckboxes[2].classList.remove("active");
      customInputs[2].classList.remove("active");
      break;
    }

    case "good": {
      customCheckboxes[0].classList.remove("active");
      customInputs[0].classList.remove("active");

      customCheckboxes[1].classList.remove("active");
      customInputs[1].classList.remove("active");

      customCheckboxes[2].classList.add("active");
      customInputs[2].classList.add("active");
      break;
    }
  }
}


customCheckboxes.forEach((ele) => {
  ele.addEventListener("click", () => checkboxChecker(ele));
});
