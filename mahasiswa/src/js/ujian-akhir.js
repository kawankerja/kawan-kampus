const btnDaftar = document.getElementById("btn-daftar-sidang");
const modalDaftar = document.getElementById("modal-daftar-sidang");
const btnCloseModalDaftar = document.getElementById(
  "close-modal-daftar-sidang"
);
const btnCancelDaftar = document.getElementById("btn-cancel-daftar-sidang");
const btnSendDaftar = document.getElementById("btn-send-daftar-sidang");

btnDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("hidden");
  modalDaftar.classList.add("flex");
});

btnCloseModalDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("flex");
  modalDaftar.classList.add("hidden");
});

btnCancelDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("flex");
  modalDaftar.classList.add("hidden");
});

btnSendDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("flex");
  modalDaftar.classList.add("hidden");
});
