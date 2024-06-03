// Fungsi untuk menampilkan dropdown aksi
document.addEventListener("DOMContentLoaded", function () {
  const dropdownsButton = document.querySelectorAll("#action-button");

  dropdownsButton.forEach((button) => {
    button.addEventListener("click", function () {
      // Tutup semua dropdown lainnya
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.add("hidden");
      });

      // Tampilkan dropdown terkait tombol yang diklik
      const dropdownContent = button.nextElementSibling;
      dropdownContent.classList.toggle("open");
    });
  });

  // Tambahkan event listener untuk menutup dropdown ketika klik di luar dropdown
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown") && !e.target.closest("#action-button")) {
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.add("hidden");
      });
    }
  });
});

// Menampilkan Modal buat Laporan
const btnBuatLaporan = document.getElementById("btn-buat-laporan");
const modalBuatLaporan = document.getElementById("modal-buat-laporan");
const btnCloseModalBuatLaporan = document.getElementById(
  "close-modal-buat-laporan"
);
const btnCancelBuatLaporan = document.getElementById("btn-cancel-buat-laporan");
const btnSaveBuatLaporan = document.getElementById("btn-save-buat-laporan");

btnBuatLaporan.addEventListener("click", () => {
  modalBuatLaporan.classList.remove("hidden");
  modalBuatLaporan.classList.add("flex");
});

btnCloseModalBuatLaporan.addEventListener("click", () => {
  modalBuatLaporan.classList.remove("flex");
  modalBuatLaporan.classList.add("hidden");
});

btnCancelBuatLaporan.addEventListener("click", () => {
  modalBuatLaporan.classList.remove("flex");
  modalBuatLaporan.classList.add("hidden");
});

btnSaveBuatLaporan.addEventListener("click", () => {
  modalBuatLaporan.classList.remove("flex");
  modalBuatLaporan.classList.add("hidden");
});

// Menampilkan Modal Buat Revisi
const btnBuatRevisi = document.getElementById("btn-buat-revisi");
const modalBuatRevisi = document.getElementById("modal-buat-revisi");
const btnCloseModalBuatRevisi = document.getElementById(
  "close-modal-buat-revisi"
);
const btnCancelBuatRevisi = document.getElementById("btn-cancel-buat-revisi");
const btnSaveBuatRevisi = document.getElementById("btn-save-buat-revisi");

btnBuatRevisi.addEventListener("click", () => {
  modalBuatRevisi.classList.remove("hidden");
  modalBuatRevisi.classList.add("flex");
});

btnCloseModalBuatRevisi.addEventListener("click", () => {
  modalBuatRevisi.classList.remove("flex");
  modalBuatRevisi.classList.add("hidden");
});

btnCancelBuatRevisi.addEventListener("click", () => {
  modalBuatRevisi.classList.remove("flex");
  modalBuatRevisi.classList.add("hidden");
});

btnSaveBuatRevisi.addEventListener("click", () => {
  modalBuatRevisi.classList.remove("flex");
  modalBuatRevisi.classList.add("hidden");
});

// Menampilkan Modal Lihat komentar
const btnLihatKomentar = document.getElementById("btn-lihat-komentar");
const modalLihatKomentar = document.getElementById("modal-lihat-komentar");
const btnCloseModalLihatKomentar = document.getElementById(
  "close-modal-lihat-komentar"
);
const btnCancelLihatKomentar = document.getElementById(
  "btn-cancel-lihat-komentar"
);
const btnSaveLihatKomentar = document.getElementById("btn-save-lihat-komentar");

btnLihatKomentar.addEventListener("click", () => {
  modalLihatKomentar.classList.remove("hidden");
  modalLihatKomentar.classList.add("flex");
});

btnCloseModalLihatKomentar.addEventListener("click", () => {
  modalLihatKomentar.classList.remove("flex");
  modalLihatKomentar.classList.add("hidden");
});

btnCancelLihatKomentar.addEventListener("click", () => {
  modalLihatKomentar.classList.remove("flex");
  modalLihatKomentar.classList.add("hidden");
});

btnSaveLihatKomentar.addEventListener("click", () => {
  modalLihatKomentar.classList.remove("flex");
  modalLihatKomentar.classList.add("hidden");
});
