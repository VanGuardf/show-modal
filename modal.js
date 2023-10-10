const show = document.querySelector(".show-modal");
const modal = document.querySelector(".modal-div");
const backdrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".close-modal");
const confirmModal = document.querySelector(".confirm-modal");
const userName = document.querySelector("#userName");
console.log(userName.value);
show.addEventListener("click", () => {
  modal.style.transform = "translateY(1vh)";
});

function closeModalFunc() {
  modal.style.transform = "translateY(-100vh)";
}
closeModal.addEventListener("click", closeModalFunc);
backdrop.addEventListener("click", closeModalFunc);

confirmModal.addEventListener("click", () => {
  if (userName.value == "") {
    alert("Please Enter Your Name!");
  } else {
    modal.style.transform = "translateY(-100vh)";
    alert("Welcome " + userName.value);
  }
});
