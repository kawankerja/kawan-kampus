const btnThis = document.querySelector("#group-button button:first-child");
const btnAll = document.querySelector("#group-button button:last-child");

const thisSemester = document.querySelector("#this-semester");
const allSemester = document.querySelector("#all-semester");

btnThis.addEventListener("click", () => {
  btnThis.classList.add("active");
  btnAll.classList.remove("active");
  thisSemester.classList.remove("hidden");
  allSemester.classList.add("hidden");
});

btnAll.addEventListener("click", () => {
  btnAll.classList.add("active");
  btnThis.classList.remove("active");
  allSemester.classList.remove("hidden");
  thisSemester.classList.add("hidden");
});
