const btnTabel = document.querySelector("#group-button button:first-child");
const btnKalender = document.querySelector("#group-button button:last-child");

const table = document.querySelector("#table");
const kalender = document.querySelector("#kalender");

btnTabel.addEventListener("click", () => {
  btnTabel.classList.add("active");
  btnKalender.classList.remove("active");
  table.classList.remove("hidden");
  kalender.classList.add("hidden");
});

btnKalender.addEventListener("click", () => {
  btnKalender.classList.add("active");
  btnTabel.classList.remove("active");
  kalender.classList.remove("hidden");
  table.classList.add("hidden");
});
// Akhir Script Tab

// Fungsi untuk menampilkan dropdown
const dropdownContent = document.getElementById("dropdown-content");
const btnAction = document.getElementById("action-button");

btnAction.addEventListener("click", (event) => {
  // Toggle class untuk menampilkan atau menyembunyikan dropdown
  dropdownContent.classList.toggle("open");
});

// Event listener untuk menutup dropdown saat klik di luar dropdown atau tombol
document.addEventListener("click", (event) => {
  const isDropdownClicked = dropdownContent.contains(event.target);
  const isButtonClicked = btnAction.contains(event.target);

  // Jika tidak ada yang diklik adalah dropdown atau tombol, sembunyikan dropdown
  if (!isDropdownClicked && !isButtonClicked) {
    dropdownContent.classList.remove("open");
  }
});

// Akhir Fungsi untuk menyelesaikan dropdown
