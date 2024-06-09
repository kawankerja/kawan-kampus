const btnTable = document.querySelector("#btn-table");
const btnKalender = document.querySelector("#btn-kalender");

const contentTable = document.querySelector("#table");
const contentKalender = document.querySelector("#content-kalender");

btnTable.addEventListener("click", () => {
	btnTable.classList.add("active");
	btnKalender.classList.remove("active");
	contentTable.classList.remove("hidden");
	contentKalender.classList.add("hidden");
});

btnKalender.addEventListener("click", () => {
	btnTable.classList.remove("active");
	btnKalender.classList.add("active");
	contentKalender.classList.remove("hidden");
	contentTable.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.querySelectorAll(
		"#content-kalender .absolute button"
	);

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const mataKuliah = button.querySelector("#title-matkul").textContent;
			const kodeMataKuliah = button.querySelector("#kode-matkul").textContent;
			const sks = button
				.querySelector("#sks-matkul")
				.textContent.match(/\d+/)[0];

			const deskripsi =
				"Meninjau perkembangan desain di India dari keadaan sosio-historis dan tekno-ekonomi";

			// Generate modal content
			const modalContent = `
      <table class="text-[#6F7072]">
        <tr>
          <td class="font-bold text-sm">Mata Kuliah</td>
          <td class="pr-2">:</td>
          <td class="text-sm">${mataKuliah}</td>
        </tr>
        <tr>
          <td class="font-bold text-sm w-36">Kode Mata Kuliah</td>
          <td class="pr-2">:</td>
          <td class="text-sm">${kodeMataKuliah}</td>
        </tr>
        <tr>
          <td class="font-bold text-sm">Deskripsi</td>
          <td class="pr-2">:</td>
        </tr>
      </table>
      <p class="text-sm text-[#6F7072] mt-2">${deskripsi}</p>

      <table
        class="mt-4 w-full border border-separate border-spacing-0 rounded-xl">
        <thead class="bg-gray-300">
          <tr>
            <th
              colspan="3"
              class="font-bold text-sm text-start text-white rounded-t-xl px-4 py-2">
              Detail
            </th>
          </tr>
        </thead>
        <tbody class="text-[#6F7072]">
          <tr>
            <td class="text-sm px-4 py-2">SKS</td>
            <td>:</td>
            <td class="text-end px-4 text-sm">${sks}</td>
          </tr>
          <tr>
            <td class="text-sm px-4 py-2">Jadwal Kuliah</td>
            <td>:</td>
            <td class="text-end px-4 text-sm">Selasa, 10.00 - 8.40</td>
          </tr>
          <tr>
            <td class="text-sm px-4 py-2">Ruangan</td>
            <td>:</td>
            <td class="text-end px-4 text-sm">R.4.04</td>
          </tr>
        </tbody>
      </table>

      <table
      class="mt-4 w-full border border-separate border-spacing-0 rounded-xl">
      <thead class="bg-gray-300">
        <tr>
          <th
            colspan="3"
            class="font-bold text-sm text-start text-white rounded-t-xl px-4 py-2">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-sm px-4 py-2 flex *:w-full gap-4">
            <button
              class="bg-primary-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                class="w-5 h-5">
                <g fill="currentColor">
                  <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 0 1 2-2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm3 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm-3 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                    clip-rule="evenodd" />
                </g>
              </svg>
              Presensi
            </button>

            <button
              class="bg-info-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.25 4C4.25 2.89543 5.14543 2 6.25 2H10.8358C11.3662 2 11.8749 2.21071 12.25 2.58579L15.6642 6C16.0393 6.37507 16.25 6.88378 16.25 7.41421V16C16.25 17.1046 15.3546 18 14.25 18H6.25C5.14543 18 4.25 17.1046 4.25 16V4ZM6.25 10C6.25 9.44772 6.69772 9 7.25 9H13.25C13.8023 9 14.25 9.44772 14.25 10C14.25 10.5523 13.8023 11 13.25 11H7.25C6.69772 11 6.25 10.5523 6.25 10ZM7.25 13C6.69772 13 6.25 13.4477 6.25 14C6.25 14.5523 6.69772 15 7.25 15H13.25C13.8023 15 14.25 14.5523 14.25 14C14.25 13.4477 13.8023 13 13.25 13H7.25Z"
                  fill="white" />
              </svg>

              Buat BAP
            </button>
          </td>
          <td class="text-sm px-4 py-2 flex *:w-full gap-4">
            <button
              class="bg-warning-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md truncate">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.25 2C5.14543 2 4.25 2.89543 4.25 4V16C4.25 17.1046 5.14543 18 6.25 18H14.25C15.3546 18 16.25 17.1046 16.25 16V7.41421C16.25 6.88378 16.0393 6.37507 15.6642 6L12.25 2.58579C11.8749 2.21071 11.3662 2 10.8358 2H6.25ZM8.25 12C8.25 11.4477 7.80228 11 7.25 11C6.69772 11 6.25 11.4477 6.25 12V15C6.25 15.5523 6.69772 16 7.25 16C7.80228 16 8.25 15.5523 8.25 15V12ZM10.25 9C10.8023 9 11.25 9.44772 11.25 10V15C11.25 15.5523 10.8023 16 10.25 16C9.69772 16 9.25 15.5523 9.25 15V10C9.25 9.44772 9.69772 9 10.25 9ZM14.25 8C14.25 7.44772 13.8023 7 13.25 7C12.6977 7 12.25 7.44772 12.25 8V15C12.25 15.5523 12.6977 16 13.25 16C13.8023 16 14.25 15.5523 14.25 15V8Z"
                  fill="white" />
              </svg>

              Lihat Nilai
            </button>

            <button
              class="bg-purple-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md truncate">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7392 3.17094C11.3602 1.60969 9.1398 1.60969 8.76078 3.17094C8.51594 4.17949 7.36045 4.65811 6.47416 4.11809C5.10218 3.28212 3.53212 4.85218 4.36809 6.22416C4.90811 7.11045 4.42949 8.26593 3.42094 8.51078C1.85969 8.8898 1.85969 11.1102 3.42094 11.4892C4.42949 11.7341 4.90811 12.8896 4.36809 13.7758C3.53212 15.1478 5.10218 16.7179 6.47417 15.8819C7.36045 15.3419 8.51594 15.8205 8.76078 16.8291C9.1398 18.3903 11.3602 18.3903 11.7392 16.8291C11.9841 15.8205 13.1396 15.3419 14.0258 15.8819C15.3978 16.7179 16.9679 15.1478 16.1319 13.7758C15.5919 12.8896 16.0705 11.7341 17.0791 11.4892C18.6403 11.1102 18.6403 8.8898 17.0791 8.51078C16.0705 8.26593 15.5919 7.11045 16.1319 6.22416C16.9679 4.85218 15.3978 3.28212 14.0258 4.11809C13.1396 4.65811 11.9841 4.17949 11.7392 3.17094ZM10.25 13C11.9069 13 13.25 11.6569 13.25 10C13.25 8.34315 11.9069 7 10.25 7C8.59315 7 7.25 8.34315 7.25 10C7.25 11.6569 8.59315 13 10.25 13Z"
                  fill="white" />
              </svg>

              Jadwalkan Ulang Perkuliahan
            </button>
          </td>
        </tr>
      </tbody>
    </table>
      `;

			// Set modal content
			document.getElementById("modal-content").innerHTML = modalContent;

			// Show modal
			document.getElementById("modal").classList.remove("hidden");
		});
	});

	// Event listener untuk tombol close modal
	document.getElementById("close-modal").addEventListener("click", () => {
		document.getElementById("modal").classList.add("hidden");
	});
});

// PRESENSI
// id = "presensi";
document.querySelectorAll("#presensi").forEach((e) => {
	e.addEventListener("click", () => {
		window.location.href = "./perkuliahan-presensi.html";
	});
});

// BAP
// id = "bap";
document.querySelectorAll("#bap").forEach((e) => {
	e.addEventListener("click", () => {
		window.location.href = "./perkuliahan-BAP.html";
	});
});

// NILAI
// id = "nilai";
document.querySelectorAll("#nilai").forEach((e) => {
	e.addEventListener("click", () => {
		window.location.href = "./perkuliahan-nilai.html";
	});
});

// JADWAL ULANG
document.querySelectorAll("#jadwal-ulang").forEach((e) => {
	e.addEventListener("click", () => {
		document
			.querySelector("#content-modal-jadwal-ulang")
			.classList.add("fixed");
		document
			.querySelector("#content-modal-jadwal-ulang")
			.classList.remove("hidden");
	});
});

document.querySelectorAll("#close-modal-jadwal-ulang").forEach((e) => {
	e.addEventListener("click", () => {
		document
			.querySelector("#content-modal-jadwal-ulang")
			.classList.remove("fixed");
		document
			.querySelector("#content-modal-jadwal-ulang")
			.classList.add("hidden");
	});
});

window.onclick = function (event) {
	if (event.target == document.querySelector("#content-modal-jadwal-ulang")) {
		document
			.querySelector("#content-modal-jadwal-ulang")
			.classList.remove("fixed");
		document
			.querySelector("#content-modal-jadwal-ulang")
			.classList.add("hidden");
	}
};
