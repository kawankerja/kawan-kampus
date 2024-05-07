// Modal
document.querySelectorAll("#open-modal").forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(
			button.getAttribute("data-modal-target")
		);
		modal.classList.remove("hidden");
		modal.classList.add("fixed");
	});
});

document.querySelectorAll("#close-modal, .modal-overlay").forEach((button) => {
	button.addEventListener("click", function (e) {
		e.stopPropagation();
		const modal = this.closest(".modal");
		if (modal) {
			modal.classList.add("hidden");
		}
	});
});

// List Btn Warna
const listBtnWarna = document.querySelectorAll(".list-btn-warna button");
listBtnWarna.forEach((btn) => {
	btn.addEventListener("click", () => {
		listBtnWarna.forEach((btn) => {
			btn.classList.add("border-gray-200");
		});
		btn.classList.toggle("border-gray-200");
	});
});

//Fullday disable
const fullday = document.getElementById("fullday");
const waktuAwal = document.getElementById("waktu-awal");
const waktuAkhir = document.getElementById("waktu-akhir");

fullday.addEventListener("click", () => {
	waktuAwal.disabled = !waktuAwal.disabled;
	waktuAkhir.disabled = !waktuAkhir.disabled;
});

// Input Tanggal
document.addEventListener("DOMContentLoaded", function () {
	const dp = flatpickr(".datepicker", {
		dateFormat: "d/m/Y",
		altInput: true,
		altFormat: "l, j F Y",
		allowInput: true,
		prevArrow: `<button type="button" class="prev-month"><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>`,
		nextArrow: `<button type="button" class="next-month"><svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>`,
		onReady: function (selectedDates, dateStr, instance) {
			customizeHeader(instance);
		},
		onMonthChange: function (selectedDates, dateStr, instance) {
			customizeHeader(instance);
		},
		onChange: function (selectedDates, dateStr, instance) {
			// if (selectedDates.length > 0) {
			// 	// const input = document.querySelector("#datepicker1");
			// 	// input.value = instance.formatDate(selectedDates[0], "l, j F Y");
			// 	console.log(instance);
			// 	// Mengubah nilai input alternatif untuk menampilkan format yang diinginkan
			// 	instance.altInput.value = instance.formatDate(
			// 		selectedDates[0],
			// 		"l, j F Y"
			// 	);
			// }

			document.getElementById("userInput").value = instance.altInput.value;
		},
		locale: {
			firstDayOfWeek: 1, // Minggu sebagai hari pertama
			weekdays: {
				shorthand: ["M", "S", "S", "R", "K", "J", "S"], // Inisial hari
				longhand: [
					"Minggu", // Sunday
					"Senin", // Monday
					"Selasa", // Tuesday
					"Rabu", // Wednesday
					"Kamis", // Thursday
					"Jumat", // Friday
					"Sabtu", // Saturday
				],
			},
			months: {
				shorthand: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"Mei",
					"Jun",
					"Jul",
					"Agu",
					"Sep",
					"Okt",
					"Nov",
					"Des",
				],
				longhand: [
					"Januari",
					"Februari",
					"Maret",
					"April",
					"Mei",
					"Juni",
					"Juli",
					"Agustus",
					"September",
					"Oktober",
					"November",
					"Desember",
				],
			},
		},
	});

	document.getElementById("userInput").addEventListener("input", function (e) {
		const dateStr = e.target.value;
		const date = flatpickr.parseDate(dateStr, "d/m/Y");

		if (date) {
			dp.setDate(date, true);
		}
	});
});

function customizeHeader(instance) {
	const monthNav = instance.monthNav;
	const prevButton = instance.prevMonthNav;
	const nextButton = instance.nextMonthNav;
	const monthName = instance.l10n.months.longhand[instance.currentMonth];
	const year = instance.currentYear;

	// Set custom innerHTML for header, including SVG buttons
	monthNav.innerHTML =
		`<span class='flatpickr-prev-month customPrev'>${prevButton.innerHTML}</span>` +
		`<span class='flatpickr-monthYear-text'><b>${monthName}</b> ${year}</span>` +
		`<span class='flatpickr-next-month customNext'>${nextButton.innerHTML}</span>`;

	// Add event listeners
	monthNav.querySelector(".customPrev").addEventListener("click", function () {
		instance.changeMonth(-1); // Move to previous month
		console.log("Moved to previous month");
		// Additional function calls here
	});

	monthNav.querySelector(".customNext").addEventListener("click", function () {
		instance.changeMonth(1); // Move to next month
		console.log("Moved to next month");
		// Additional function calls here
	});
}

// Alert Succes & Error
const Modal = document.querySelectorAll(".modal");
const btnSimpan = document.querySelector("#btn-simpan");
const popupBerhasil = document.querySelector("#popup-berhasil");
const popupGagal = document.querySelector("#popup-gagal");

btnSimpan.addEventListener("click", () => {
	popupBerhasil.classList.toggle("hidden");

	Modal.forEach((element) => {
		element.classList.add("hidden");
	});
});
