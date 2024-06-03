const btnUploadTugasAkhir = document.getElementById("btn-upload-tugas-akhir");
const modalUploadTugasAkhir = document.getElementById(
  "modal-upload-tugas-akhir"
);
const btnCloseUploadTugasAkhir = document.getElementById(
  "close-modal-upload-tugas-akhir"
);
const btnSimpanUploadTugasAkhir = document.getElementById(
  "btn-simpan-upload-tugas-akhir"
);

btnUploadTugasAkhir.addEventListener("click", () => {
  modalUploadTugasAkhir.classList.remove("hidden");
  modalUploadTugasAkhir.classList.add("flex");
});

btnCloseUploadTugasAkhir.addEventListener("click", () => {
  modalUploadTugasAkhir.classList.remove("flex");
  modalUploadTugasAkhir.classList.add("hidden");
});

btnSimpanUploadTugasAkhir.addEventListener("click", () => {
  modalUploadTugasAkhir.classList.remove("flex");
  modalUploadTugasAkhir.classList.add("hidden");
});
