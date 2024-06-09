document.getElementById("dashboard").addEventListener("click", function () {
	window.location.href = "./dashboard.html";
});

document.getElementById("data-diri").addEventListener("click", function () {
	window.location.href = "./profile-datadiri.html";
});

document.getElementById("gaji").addEventListener("click", function () {
	window.location.href = "./profile-gaji.html";
});

document.getElementById("perkuliahan").addEventListener("click", function () {
	window.location.href = "./perkuliahan.html";
});

document.getElementById("kalender").addEventListener("click", function () {
	window.location.href = "../admin/kalender-akademik.html";
});

document.getElementById("catatan-studi").addEventListener("click", function () {
	window.location.href = "./bimbingan-catatan-studi.html";
});

document.getElementById("krs").addEventListener("click", function () {
	window.location.href = "./bimbingan-krs.html";
});

document.getElementById("tugas-akhir").addEventListener("click", function () {
	window.location.href = "./bimbingan-tugas-akhir.html";
});

document.querySelectorAll("#btn-riwayat-bimbingan").forEach((button) => {
	button.addEventListener("click", function () {
		window.location.href = "./bimbingan-tugas-akhir-riwayat-bimbingan.html";
	});
});

document.getElementById("ujian-akhir").addEventListener("click", function () {
	window.location.href = "./bimbingan-ujian-akhir.html";
});

document.getElementById("kpi").addEventListener("click", function () {
	window.location.href = "./kpi.html";
});
