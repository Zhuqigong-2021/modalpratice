const modalbtns = document.querySelectorAll(".btn-modal");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const confirm = document.querySelector(".confirm");
const cancel = document.querySelector(".cancel");
console.log(modalbtns);

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
modalbtns.forEach((btn) => btn.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);
confirm.addEventListener("click", closeModal);
cancel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
window.addEventListener(
  "keydown",
  (e) =>
    (e.key =
      "Escape" && !overlay.classList.contains("hidden") ? closeModal() : "")
);
