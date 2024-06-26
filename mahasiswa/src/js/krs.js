const btnKrs = document.querySelector("#group-button button:first-child");
const btnJadwal = document.querySelector("#group-button button:last-child");

const krs = document.querySelector("#krs");
const jadwal = document.querySelector("#jadwal");

btnKrs.addEventListener("click", () => {
  btnKrs.classList.add("active");
  btnJadwal.classList.remove("active");
  krs.classList.remove("hidden");
  jadwal.classList.add("hidden");
});

btnJadwal.addEventListener("click", () => {
  btnJadwal.classList.add("active");
  btnKrs.classList.remove("active");
  jadwal.classList.remove("hidden");
  krs.classList.add("hidden");
});

// Fungsi untuk menampilkan dropdown aksi
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
// Akhir Fungsi untuk menyelesaikan dropdown aksi

// fungsi untuk menampilkan modals detail matkul
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#jadwal .absolute button");

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
      document.getElementById("modal-detail").classList.remove("hidden");
    });
  });

  // Event listener untuk tombol close modal
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal-detail").classList.add("hidden");
  });
});

// Menampilkan Modal Confirmation back to KRS Page
const btnBackToKrs = document.getElementById("btn-back-to-krs");
const btnAddKrs = document.getElementById("btn-add-krs");
const modalBack = document.getElementById("modal-confirmation-back");
const modalAdd = document.getElementById("modal-confirmation-add");
const btnConfirmBack = document.getElementById("btn-confirm-back");
const btnCancelBack = document.getElementById("btn-cancel-back");
const btnCloseBack = document.getElementById("close-modal-confirmation-back");
const btnConfirmAdd = document.getElementById("btn-confirm-add");
const btnCancelAdd = document.getElementById("btn-cancel-add");
const btnCloseAdd = document.getElementById("close-modal-confirmation-add");

// Show modal on button click
btnBackToKrs.onclick = function (event) {
  event.preventDefault();
  modalBack.style.display = "flex";
};

btnAddKrs.onclick = function (event) {
  event.preventDefault();
  modalAdd.style.display = "flex";
};

// Handle confirm action
btnConfirmBack.onclick = function () {
  window.location.href = "./krs-open.html";
};

// Handle cancel action
btnCancelBack.onclick = function () {
  modalBack.style.display = "none";
};

btnCloseBack.onclick = function () {
  modalBack.style.display = "none";
};

// Handle confirm action
btnConfirmAdd.onclick = function () {
  window.location.href = "./krs-tambah-matkul.html";
};

// Handle cancel action
btnCancelAdd.onclick = function () {
  modalAdd.style.display = "none";
};

btnCloseAdd.onclick = function () {
  modalAdd.style.display = "none";
};

// Fungsi untuk DELETE MODAL
document.addEventListener("DOMContentLoaded", function () {
  const trashButtons = document.querySelectorAll("button#trash");
  const modal = document.getElementById("modal-confirmation-delete");
  const confirmButton = document.getElementById("btn-confirm-delete");
  const cancelButton = document.getElementById("btn-cancel-delete");
  const closeButton = document.getElementById(
    "close-modal-confirmation-delete"
  );
  let currentButton = null;

  trashButtons.forEach((button) => {
    button.addEventListener("click", function () {
      currentButton = this;
      modal.style.display = "flex";
    });
  });

  confirmButton.addEventListener("click", function () {
    if (currentButton) {
      currentButton.closest(".relative").remove();
      modal.style.display = "none";
      currentButton = null;
    }
  });

  cancelButton.addEventListener("click", function () {
    modal.style.display = "none";
    currentButton = null;
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      currentButton = null;
    }
  });

  closeButton.onclick = function () {
    modal.style.display = "none";
  };
});
