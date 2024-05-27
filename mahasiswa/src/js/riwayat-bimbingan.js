// MODAL TAMBAH RIWAYAT BIMBINGAN
const btnTambah = document.getElementById("btn-tambah-riwayat");
const modalTambah = document.getElementById("modal-tambah-riwayat");
const btnCloseModalTambah = document.getElementById(
  "close-modal-tambah-riwayat"
);
const btnCancelTambah = document.getElementById("btn-cancel-tambah-riwayat");
const btnSaveTambah = document.getElementById("btn-save-tambah-riwayat");

btnTambah.addEventListener("click", () => {
  modalTambah.classList.remove("hidden");
  modalTambah.classList.add("flex");
});

btnCloseModalTambah.addEventListener("click", () => {
  modalTambah.classList.remove("flex");
  modalTambah.classList.add("hidden");
});

btnCancelTambah.addEventListener("click", () => {
  modalTambah.classList.remove("flex");
  modalTambah.classList.add("hidden");
});

btnSaveTambah.addEventListener("click", () => {
  modalTambah.classList.remove("flex");
  modalTambah.classList.add("hidden");
});

// END MODAL TAMBAH RIWAYAT BIMBINGAN

// MODAL DAFTAR SIDANG
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
  modalKonfirmasi.classList.add("flex");
  modalKonfirmasi.classList.remove("hidden");
});
// END MODAL DAFTAR SIDANG

// MODAL KONFIRMASI
const modalKonfirmasi = document.getElementById("modal-confirmation-send");
const btnCloseModalKonfirmasi = document.getElementById(
  "close-modal-confirmation-send"
);
const btnCancelSend = document.getElementById("btn-cancel-send");
const btnSend = document.getElementById("btn-confirm-send");

btnCloseModalKonfirmasi.addEventListener("click", () => {
  modalKonfirmasi.classList.remove("flex");
  modalKonfirmasi.classList.add("hidden");
});

btnCancelSend.addEventListener("click", () => {
  modalKonfirmasi.classList.remove("flex");
  modalKonfirmasi.classList.add("hidden");
});

// END MODAL KONFIRMASI

// MODAL SUCCESS
const modalSuccess = document.getElementById("modal-success");
const btnCloseModalSuccess = document.getElementById("close-modal-success");
const btnFinish = document.getElementById("btn-finish");
const btnStay = document.getElementById("btn-stay");

btnSend.addEventListener("click", () => {
  modalKonfirmasi.classList.remove("flex");
  modalKonfirmasi.classList.add("hidden");
  modalSuccess.classList.remove("hidden");
  modalSuccess.classList.add("flex");
});

btnCloseModalSuccess.addEventListener("click", () => {
  modalSuccess.classList.remove("flex");
  modalSuccess.classList.add("hidden");
});

btnFinish.addEventListener("click", () => {
  window.location.href = "./ujian-akhir.html";
});

btnStay.addEventListener("click", () => {
  modalSuccess.classList.remove("flex");
  modalSuccess.classList.add("hidden");
});

// END MODAL SUCCESS
