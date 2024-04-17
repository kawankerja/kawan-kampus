let dataSaudara = document.getElementById("dataSaudara");
let checkboxSaudara = document.getElementById("checkboxSaudara");
let tambahSaudara = document.getElementById("tambahSaudara");
i = 1;

checkboxSaudara.addEventListener("change", function () {
	if (this.checked) {
		dataSaudara.classList.remove("hidden");
		dataSaudara.classList.add("flex");
	} else {
		dataSaudara.classList.add("hidden");
		dataSaudara.classList.remove("flex");
	}
});

function addSaudara() {
	i++;
	let template = `
  <div id="addsaudara${i}" class="flex flex-col gap-4">
    <hr />

    <span class="flex justify-between">
      <p class="font-semibold">Saudara ${i}</p>
      <button
        id="hapusSaudara${i}"
        onclick="hapusSaudara(${i})"
        type="button"
        class="flex items-center justify-center px-3 py-1 bg-danger-main rounded-lg font-medium text-sm text-white">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 2.5C4.89543 2.5 4 3.39543 4 4.5V16.5C4 17.6046 4.89543 18.5 6 18.5H14C15.1046 18.5 16 17.6046 16 16.5V7.91421C16 7.38378 15.7893 6.87507 15.4142 6.5L12 3.08579C11.6249 2.71071 11.1162 2.5 10.5858 2.5H6ZM7 10.5C6.44772 10.5 6 10.9477 6 11.5C6 12.0523 6.44772 12.5 7 12.5H13C13.5523 12.5 14 12.0523 14 11.5C14 10.9477 13.5523 10.5 13 10.5H7Z"
            fill="white" />
        </svg>

        Hapus Saudara
      </button>
    </span>

    <div class="nama flex flex-col gap-1">
      <label class="text-[12px]" for="">Nama</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="Roland Cronin" />
    </div>

    <div class="nik flex flex-col gap-1">
      <label class="text-[12px]" for="">NIK</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="67938271" />
    </div>

    <div class="peran flex flex-col gap-1">
      <label class="text-[12px]" for="">Peran</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="Kakak" />
    </div>

    <div class="tempat-lahir flex flex-col gap-1">
      <label class="text-[12px]" for="">Tempat Lahir</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="Bandung" />
    </div>

    <div class="tanggal-lahir flex flex-col gap-1">
      <label class="text-[12px]" for="">Tanggal Lahir</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="10 April 1996" />
      <div
        class="flex gap-1 text-[12px] text-gray-500 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4001 8.0001C14.4001 11.5347 11.5347 14.4001 8.0001 14.4001C4.46548 14.4001 1.6001 11.5347 1.6001 8.0001C1.6001 4.46548 4.46548 1.6001 8.0001 1.6001C11.5347 1.6001 14.4001 4.46548 14.4001 8.0001ZM8.8001 4.8001C8.8001 5.24193 8.44193 5.6001 8.0001 5.6001C7.55827 5.6001 7.2001 5.24193 7.2001 4.8001C7.2001 4.35827 7.55827 4.0001 8.0001 4.0001C8.44193 4.0001 8.8001 4.35827 8.8001 4.8001ZM7.2001 7.2001C6.75827 7.2001 6.4001 7.55827 6.4001 8.0001C6.4001 8.44193 6.75827 8.8001 7.2001 8.8001V11.2001C7.2001 11.6419 7.55827 12.0001 8.0001 12.0001H8.8001C9.24193 12.0001 9.6001 11.6419 9.6001 11.2001C9.6001 10.7583 9.24193 10.4001 8.8001 10.4001V8.0001C8.8001 7.55827 8.44193 7.2001 8.0001 7.2001H7.2001Z"
            fill="#909090" />
        </svg>
        <p>
          Anda dapat menulis menggunakan format : DD/MM/YYYY
        </p>
      </div>
    </div>

    <div class="pekerjaan flex flex-col gap-1">
      <label class="text-[12px]" for="">Pekerjaan</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="Pegawai Negeri Sipil" />
    </div>

    <div class="penghasilan flex flex-col gap-1">
      <label class="text-[12px]" for="">Penghasilan</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="1.000.000 - 5.000.000" />
    </div>

    <hr />

    <p class="text-base font-semibold">
      Alamat Kontak (Saudara ${i})
    </p>

    <div class="email-pribadi flex flex-col gap-1">
      <label class="text-[12px]" for="">Email Pribadi</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="email"
        value="roland@youmail.com" />
    </div>

    <div class="alamat-rumah flex flex-col gap-1">
      <label class="text-[12px]" for="">Alamat Rumah</label>
      <textarea
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        name=""
        id=""
        rows="3">
91459 Zemlak Knoll</textarea
      >
    </div>

    <div class="no-hp flex flex-col gap-1">
      <label class="text-[12px]" for="">No HP</label>
      <input
        class="text-sm px-3 py-2 rounded-lg border border-gray-300"
        type="text"
        value="719-466-9612" />
    </div>
  </div>`;

	tambahSaudara.innerHTML += template;

	console.log(tambahSaudara);
	console.log(i);
}

function hapusSaudara(i) {
	let saudara = document.getElementById(`addsaudara${i}`);
	saudara.remove();
	i++;
}
