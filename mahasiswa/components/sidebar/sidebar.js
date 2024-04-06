// Get the button and dropdown menu
const btnKuliah = document.getElementById("perkuliahan");
const btnTugas = document.getElementById("tugas");
const arrowKuliah = document.getElementById("arrow-kuliah");
const arrowTugas = document.getElementById("arrow-tugas");
const dropdownKuliah = document.querySelector(".dropdown-kuliah");
const dropdownTugas = document.querySelector(".dropdown-tugas");

// Function to toggle dropdown menu visibility for Kuliah
function toggleDropdownKuliah() {
  const isOpen = !dropdownKuliah.classList.contains("open");
  dropdownKuliah.classList.toggle("open", isOpen);
  arrowKuliah.classList.toggle("-rotate-180", isOpen);
  localStorage.setItem("dropdownKuliahOpen", isOpen ? "true" : "false");
}

// Function to toggle dropdown menu visibility for Tugas
function toggleDropdownTugas() {
  const isOpen = !dropdownTugas.classList.contains("open");
  dropdownTugas.classList.toggle("open", isOpen);
  arrowTugas.classList.toggle("-rotate-180", isOpen);
  localStorage.setItem("dropdownTugasOpen", isOpen ? "true" : "false");
}

// Add event listener to the button to toggle dropdown menu visibility for Kuliah
btnKuliah.addEventListener("click", toggleDropdownKuliah);
btnTugas.addEventListener("click", toggleDropdownTugas);

// Load the state of the dropdown menus from local storage
document.addEventListener("DOMContentLoaded", function () {
  const dropdownKuliahOpen =
    localStorage.getItem("dropdownKuliahOpen") === "true";
  const dropdownTugasOpen =
    localStorage.getItem("dropdownTugasOpen") === "true";

  if (dropdownKuliahOpen) {
    dropdownKuliah.classList.add("open");
    arrowKuliah.classList.add("-rotate-180");
  }

  if (dropdownTugasOpen) {
    dropdownTugas.classList.add("open");
    arrowTugas.classList.add("-rotate-180");
  }
});

const linkDashboard = document.getElementById("link-dashboard");

linkDashboard.addEventListener("click", function () {
  window.location.href = "dashboard.html";
});

// for active link routes
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const hiddenDiv = link.querySelector(".hidden");
    if (link.pathname === currentLocation) {
      link.classList.add("active");
      if (hiddenDiv) {
        hiddenDiv.classList.remove("hidden");
      }
    }
  });
});
