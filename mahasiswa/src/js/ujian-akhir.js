document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".kontak-dosen > button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr"); // Get the closest row
      const namaDosen = row.querySelector("#nama-dosen").textContent; // Get the name of the lecturer
      const prodi = "Teknik Informatika";
      const email = "janiskuvalis@gmail.com";
      const noHp = "496-775-6348";
      const phone = "947-629-2071";
      const alamat = "257 Fisher Islands, Cibaduyut, Bandung, Jawa Barat";

      // Generate modal content
      const modalContent = `
        <table class="text-[#6F7072]">
            <tr>
              <td class="text-sm">Nama Lengkap</td>
              <td class="pr-2">:</td>
              <td class="text-sm font-bold">${namaDosen}</td>
            </tr>
            <tr>
              <td class="text-sm w-36">Prodi</td>
              <td class="pr-2">:</td>
              <td class="text-sm">${prodi}</td>
            </tr>
            
        </table>
        <hr class="border-gray-100 my-2" />
    
        <table class="mt-4 w-full border border-separate border-spacing-0 rounded-xl">
          <thead class="bg-gray-300">
            <tr>
              <th colspan="3" class="font-bold text-sm text-start text-white rounded-t-xl px-4 py-2">Kontak Dosen</th>
            </tr>
          </thead>
          <tbody class="text-[#6F7072]">
            <tr>
              <td class="text-sm px-4 py-2">Email</td>
              <td>:</td>
              <td class="text-end px-4 text-sm">
                <div class="flex gap-2 items-center justify-end">
                  <p id="email-text">${email}</p>
                  <button id="btn-copy-email">
                    <img src="./src/assets/file-copy.svg" alt="copy-icon" />
                  </button>
                  <img src="./src/assets/mail.svg" alt="mail-icon" />
                </div>
              </td>
            </tr>
            <tr class="bg-success-surface">
              <td class="text-sm px-4 py-2">Nomor Handphone</td>
              <td>:</td>
              <td class="text-end px-4 text-sm">
                <div class="flex gap-2 items-center justify-end">
                  <p id="hp-text">${noHp}</p>
                  <button id="btn-copy-hp">
                    <img src="./src/assets/file-copy.svg" alt="copy-icon" />
                  </button>
                  <img src="./src/assets/whatsapp-solid.svg" alt="whatsapp-solid-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-sm px-4 py-2">Telepon Rumah</td>
              <td>:</td>
              <td class="text-end px-4 text-sm">
                <div class="flex gap-2 items-center justify-end">
                  <p id="phone-text">${phone}</p>
                  <button id="btn-copy-phone">
                    <img src="./src/assets/file-copy.svg" alt="copy-icon" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table class="mt-4 w-full border border-separate border-spacing-0 rounded-xl">
          <thead class="bg-gray-300">
            <tr>
              <th colspan="3" class="font-bold text-sm text-start text-white rounded-t-xl px-4 py-2">Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-sm px-4 py-2">
                <div class="flex justify-between items-center text-[#6F7072]">
                  <p>${alamat}</p>
                  <div class="flex items-center gap-2">
                    <button id="btn-copy-address">
                      <img src="./src/assets/file-copy.svg" alt="copy-icon" />
                    </button>
                    <img src="./src/assets/maps.svg" alt="maps-icon" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <button class="w-full bg-primary-main text-white py-2 rounded-lg mt-6">Tutup</button>

      `;

      // Set modal content
      document.getElementById("modal-content").innerHTML = modalContent;

      // Show modal
      document
        .getElementById("modal-detail-contact")
        .classList.remove("hidden");

      // Add event listeners to copy buttons
      document
        .getElementById("btn-copy-email")
        .addEventListener("click", () => {
          copyToClipboard(email);
        });

      document.getElementById("btn-copy-hp").addEventListener("click", () => {
        copyToClipboard(noHp);
      });

      document
        .getElementById("btn-copy-phone")
        .addEventListener("click", () => {
          copyToClipboard(phone);
        });

      document
        .getElementById("btn-copy-address")
        .addEventListener("click", () => {
          copyToClipboard(alamat);
        });
    });
  });

  // Function to copy text to clipboard
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard:", text);
        // You can add a visual indicator or feedback here if needed
      })
      .catch((err) => {
        console.error("Error copying text:", err);
        // Handle any errors here
      });
  }

  // Event listener for close modal button
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal-detail-contact").classList.add("hidden");
  });
});

const btnDaftar = document.getElementById("btn-daftar-sidang");
const modalDaftar = document.getElementById("modal-daftar-sidang");
const btnCloseModalDaftar = document.getElementById(
  "close-modal-daftar-sidang"
);
const btnCancelDaftar = document.getElementById("btn-cancel-daftar-sidang");
const btnSendDaftar = document.getElementById("btn-send-daftar-sidang");

btnDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("hidden");
  modalDaftar.classList.add("flex");
});

btnCloseModalDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("flex");
  modalDaftar.classList.add("hidden");
});

btnCancelDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("flex");
  modalDaftar.classList.add("hidden");
});

btnSendDaftar.addEventListener("click", () => {
  modalDaftar.classList.remove("flex");
  modalDaftar.classList.add("hidden");
});
