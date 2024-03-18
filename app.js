"use strict";

const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".modal");
const openPopup = document.querySelectorAll("#show-modal");
const closePopup = document.querySelector(".close-modal");

for (let i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener("click", function () {
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeAll = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};
closePopup.addEventListener("click", closeAll);
overlay.addEventListener("click", closeAll);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closeAll();
  }
});
