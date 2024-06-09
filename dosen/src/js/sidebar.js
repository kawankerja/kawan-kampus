document.getElementById("profile").addEventListener("click", function () {
	document.getElementById("dropdown-profile").classList.toggle("hidden");
	document.getElementById("icon-profile").classList.toggle("rotate-180");
});

document.getElementById("bimbingan").addEventListener("click", function () {
	document.getElementById("dropdown-bimbingan").classList.toggle("hidden");
	document.getElementById("icon-bimbingan").classList.toggle("rotate-180");
});

document.querySelectorAll("#open-modal-keluar").forEach((e) => {
	e.addEventListener("click", () => {
		document.querySelector("#content-modal-keluar").classList.add("fixed");
		document.querySelector("#content-modal-keluar").classList.remove("hidden");
	});
});

document.querySelectorAll("#close-modal-keluar").forEach((e) => {
	e.addEventListener("click", () => {
		document.querySelector("#content-modal-keluar").classList.remove("fixed");
		document.querySelector("#content-modal-keluar").classList.add("hidden");
	});
});

window.onclick = function (event) {
	if (event.target == document.querySelector("#content-modal-keluar")) {
		document.querySelector("#content-modal-keluar").classList.remove("fixed");
		document.querySelector("#content-modal-keluar").classList.add("hidden");
	}
};
