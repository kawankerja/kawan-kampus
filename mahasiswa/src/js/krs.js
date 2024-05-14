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
document.addEventListener("DOMContentLoaded", function () {
  const dropdownsButton = document.querySelectorAll("#action-button");

  dropdownsButton.forEach((button) => {
    button.addEventListener("click", function () {
      // Tutup semua dropdown lainnya
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.add("hidden");
      });

      // Tampilkan dropdown terkait tombol yang diklik
      const dropdownContent = button.nextElementSibling;
      dropdownContent.classList.toggle("open");
    });
  });

  // Tambahkan event listener untuk menutup dropdown ketika klik di luar dropdown
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown") && !e.target.closest("#action-button")) {
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.add("hidden");
      });
    }
  });
});
// Akhir Fungsi untuk menyelesaikan dropdown

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#kalender .absolute button");

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

    
        <table class="mt-4 w-full border border-separate border-spacing-0 rounded-xl">
          <thead class="bg-gray-300">
            <tr>
              <th colspan="3" class="font-bold text-sm text-start text-white rounded-t-xl px-4 py-2">Detail</th>
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
        
        <table class="mt-4 w-full border border-separate border-spacing-0 rounded-xl">
          <thead class="bg-gray-300">
            <tr>
              <th colspan="3" class="font-bold text-sm text-start text-white rounded-t-xl px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-sm pl-4 py-2">
                <button class="bg-primary-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                class="w-5 h-5"
              >
                <g fill="currentColor">
                  <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 0 1 2-2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm3 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm-3 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
              Presensi
                </button>
              </td>
              <td class="text-sm p-2">
                <button class="bg-info-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md">
                <img src="./src/assets/light-bulb-white.svg" alt="light-bulb" />
              Lihat RPS
                </button>
              </td>
              <td class="text-sm pr-4 py-2">
                <button class="bg-warning-main text-white flex gap-2 items-center w-[170px] max-w-full justify-center py-2 rounded-md truncate">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                class="w-5 h-5"
              >
                <g fill="currentColor">
                  <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 0 1 2-2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm3 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm-3 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm3 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                    clip-rule="evenodd"
                  />
                </g>
              </svg>
              Daftar Mahasiswa
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
