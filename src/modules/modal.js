const modal = document.getElementById("modal-scheduling");
const btnCloseModal = document.getElementById("close-modal");
const btnOpenModal = document.querySelector(".new-schedule");

console.log(btnOpenModal);

btnOpenModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-open");
  document.body.style.overflow = "hidden";
});

btnCloseModal.addEventListener("click", () => {
  console.log("FECHAAAR");
  modal.classList.remove("modal-open");
  document.body.style.overflow = "initial";
});
