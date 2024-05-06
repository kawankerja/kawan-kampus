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
