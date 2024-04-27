let dataPasangan = document.querySelector(".box-pasangan");
let checkboxPasangan = document.getElementById("checkboxPasangan");
let tambahPasangan = document.getElementById("tambahPasangan");
let headerPasangan = document.querySelector(".data-pasangan .headerPasangan");

console.log(dataPasangan);

checkboxPasangan.addEventListener("change", function () {
	if (checkboxPasangan.checked) {
		dataPasangan.classList.remove("hidden");
		dataPasangan.classList.add("block");
		headerPasangan.classList.add("rounded-t-lg");
		headerPasangan.classList.remove("rounded-lg");
	} else {
		dataPasangan.classList.add("hidden");
		dataPasangan.classList.remove("block");
		headerPasangan.classList.remove("rounded-t-lg");
		headerPasangan.classList.add("rounded-lg");
	}
});
