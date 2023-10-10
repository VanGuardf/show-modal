const show = document.querySelector(".show-modal");
const modal = document.querySelector(".modal-div");
const backdrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".close-modal");
const confirmModal = document.querySelector(".confirm-modal");

show.addEventListener("click", () => {
  modal.style.transform = "translateY(1vh)";
});

function closeModalFunc() {
  modal.style.transform = "translateY(-100vh)";
}

closeModal.addEventListener("click", closeModalFunc);
backdrop.addEventListener("click", closeModalFunc);
confirmModal.addEventListener("click", () => {
  modal.style.transform = "translateY(-100vh)";
  alert("Confirmem Your Form!");
});
