let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const events = {
	"2024-05-01": [{ title: "event1", color: "hijau" }],
	"2024-05-02": [
		{ title: "event1", color: "merah" },
		{ title: "event2", color: "biru" },
		{ title: "event3", color: "kuning" },
	],
	"2024-05-03": [{ title: "event1", color: "ungu" }],
	"2024-05-04": [
		{ title: "event1", color: "merah" },
		{ title: "event2", color: "biru" },
		{ title: "event3", color: "kuning" },
		{ title: "event4", color: "ungu" },
	],
};

function createCalendar(year, month) {
	const today = new Date();
	const todayDate = today.getDate();
	const isCurrentMonth =
		today.getFullYear() === year && today.getMonth() === month;

	const monthStart = new Date(year, month);
	const monthEnd = new Date(year, month + 1, 0);
	const daysInMonth = monthEnd.getDate();
	const firstDay = (new Date(year, month).getDay() + 6) % 7;

	const daysBefore = firstDay;
	const daysAfter = 6 * 7 - (daysInMonth + daysBefore); // 6 rows total, 7 days per week

	const calendar = document.getElementById("calendar");
	calendar.innerHTML = `
	<div class="day-name">Senin</div>
	<div class="day-name">Selasa</div>
	<div class="day-name">Rabu</div>
	<div class="day-name">Kamis</div>
	<div class="day-name">Jumat</div>
	<div class="day-name">Sabtu</div>
	<div class="day-name">Minggu</div>`;

	updateMonthAndYearDisplay(monthStart);

	// Days before the current month
	for (let i = daysBefore - 1; i >= 0; i--) {
		const daySquare = document.createElement("div");
		daySquare.classList.add("day", "other-month");

		const p = document.createElement("p");
		p.classList.add("day-name");

		daySquare.appendChild(p);

		if ((firstDay + i - 1) % 7 >= 5) {
			daySquare.classList.add("weekend");
		} // Color weekends differently

		const date = new Date(year, month, -i);

		p.innerText = date.getDate();
		calendar.appendChild(daySquare);
	}

	// Current month days
	for (let i = 1; i <= daysInMonth; i++) {
		const daySquare = document.createElement("div");

		const p = document.createElement("p");

		daySquare.classList.add("day");

		p.innerText = i;
		daySquare.appendChild(p);

		if ((firstDay + i - 1) % 7 >= 5) {
			// Adjust for weekend highlighting
			daySquare.classList.add("weekend");
		}

		const dateStr = `${year}-${("0" + (month + 1)).slice(-2)}-${("0" + i).slice(
			-2
		)}`;

		// Create a container for events
		const boxEvent = document.createElement("div");
		boxEvent.classList.add("box-event");

		if (events[dateStr]) {
			const panjangArray = events[dateStr].length;
			if (panjangArray > 2) {
				events[dateStr].slice(0, 2).forEach((event) => {
					// event kalender
					const eventDiv = document.createElement("div");
					eventDiv.classList.add("event");
					eventDiv.innerText = event.title;
					if (event.color == "hijau") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#57AF81]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "biru") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#3267E3]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "kuning") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#CD7B2E]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "merah") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#CB3A31]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "ungu") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#9B51E0]");
						boxEvent.appendChild(eventDiv);
					}
				});

				const moreDiv = document.createElement("div");
				moreDiv.classList.add("more-event");
				moreDiv.innerText = `+${panjangArray - 2} more`;
				boxEvent.appendChild(moreDiv);
			} else {
				events[dateStr].slice(0, 2).forEach((event) => {
					const eventDiv = document.createElement("div");
					eventDiv.classList.add("event");
					eventDiv.innerText = event.title;
					if (event.color == "hijau") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#57AF81]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "biru") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#3267E3]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "kuning") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#CD7B2E]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "merah") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#CB3A31]");
						boxEvent.appendChild(eventDiv);
					} else if (event.color == "ungu") {
						eventDiv.innerText = event.title;
						eventDiv.classList.add("before:bg-[#9B51E0]");
						boxEvent.appendChild(eventDiv);
					}
				});
			}
		}

		daySquare.appendChild(boxEvent);

		daySquare.addEventListener("click", () => {
			document
				.querySelectorAll(".day")
				.forEach((day) => day.classList.remove("selected"));
			daySquare.classList.add("selected");
			updateEventList(dateStr);
		});

		if (isCurrentMonth && i === todayDate) {
			daySquare.classList.add("today", "selected");
			updateEventList(dateStr); // Automatically load today's events
		}
		calendar.appendChild(daySquare);
	}

	// Days after the current month
	for (let i = 1; i <= daysAfter; i++) {
		const daySquare = document.createElement("div");
		daySquare.classList.add("day", "other-month");
		const date = new Date(year, month + 1, i);
		daySquare.innerText = date.getDate();
		calendar.appendChild(daySquare);
	}
}

function updateEventList(date) {
	function formatTanggalFromString(inputString) {
		// Membuat objek Date dari string input
		const date = new Date(inputString);

		const bulan = [
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
		];

		let hari = date.getDate(); // Mengambil tanggal dari objek date
		let nomorBulan = date.getMonth(); // Mengambil bulan dari objek date
		let tahun = date.getFullYear(); // Mengambil tahun dari objek date

		return `${hari} ${bulan[nomorBulan]} ${tahun}`;
	}

	function parseToday(date) {
		const today = new Date();
		const todayDate = today.getDate();

		if (todayDate == date.slice(8, 10)) {
			return "Hari ini";
		} else {
			return formatTanggalFromString(date);
		}
	}

	const eventList = document.getElementById("event-list");

	eventList.innerHTML = `
    <div class="head flex gap-2 items-center">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
          fill="#424242" />
      </svg>

      <p class="font-medium">${parseToday(date)}</p>
    </div>`;

	if (events[date]) {
		events[date].forEach((event) => {
			const eventDiv = document.createElement("div");
			eventDiv.classList.add("event");
			if (event.color == "hijau") {
				eventDiv.innerText = event.title;
				eventDiv.classList.add("before:bg-[#57AF81]");
				eventList.appendChild(eventDiv);
			} else if (event.color == "biru") {
				eventDiv.innerText = event.title;
				eventDiv.classList.add("before:bg-[#3267E3]");
				eventList.appendChild(eventDiv);
			} else if (event.color == "kuning") {
				eventDiv.innerText = event.title;
				eventDiv.classList.add("before:bg-[#CD7B2E]");
				eventList.appendChild(eventDiv);
			} else if (event.color == "merah") {
				eventDiv.innerText = event.title;
				eventDiv.classList.add("before:bg-[#CB3A31]");
				eventList.appendChild(eventDiv);
			} else if (event.color == "ungu") {
				eventDiv.innerText = event.title;
				eventDiv.classList.add("before:bg-[#9B51E0]");
				eventList.appendChild(eventDiv);
			}
		});
	} else {
		eventList.innerHTML += "<p>No events</p>";
	}
}

function updateMonthAndYearDisplay(date) {
	const monthAndYear = document.getElementById("monthAndYear");
	monthAndYear.innerHTML = `<b>${date.toLocaleString("default", {
		month: "long",
	})}</b> ${date.getFullYear()}`;
}

document.getElementById("prevMonth").addEventListener("click", () => {
	if (currentMonth === 0) {
		currentMonth = 11;
		currentYear--;
	} else {
		currentMonth--;
	}
	createCalendar(currentYear, currentMonth);
});

document.getElementById("nextMonth").addEventListener("click", () => {
	if (currentMonth === 11) {
		currentMonth = 0;
		currentYear++;
	} else {
		currentMonth++;
	}
	createCalendar(currentYear, currentMonth);
});

createCalendar(currentYear, currentMonth); // Initial call
