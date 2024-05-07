// Script Tab
const btnDataDiri = document.querySelector("#group-button button:first-child");
const btnInformasiAkun = document.querySelector(
	"#group-button button:last-child"
);

const dataDiri = document.querySelector("#data-diri");
const informasiAkun = document.querySelector("#informasi-akun");

btnDataDiri.addEventListener("click", () => {
	btnDataDiri.classList.add("active");
	btnInformasiAkun.classList.remove("active");
	dataDiri.classList.remove("hidden");
	informasiAkun.classList.add("hidden");
});

btnInformasiAkun.addEventListener("click", () => {
	btnInformasiAkun.classList.add("active");
	btnDataDiri.classList.remove("active");
	informasiAkun.classList.remove("hidden");
	dataDiri.classList.add("hidden");
});

// Script password
const pwOld = document.querySelector("#password-old");
const pwNew = document.querySelector("#password-new");
const pwKonfirmasi = document.querySelector("#password-konfirmasi");

const eyeOld = document.querySelector("#eye-old");
const eyeNew = document.querySelector("#eye-new");
const eyeKonfirmasi = document.querySelector("#eye-konfirmasi");

eyeOld.addEventListener("click", () => {
	if (pwOld.type === "password") {
		pwOld.type = "text";
		eyeOld.src = "assets/img/eye.svg";
	} else {
		pwOld.type = "password";
		eyeOld.src = "assets/img/eye-off.svg";
	}
});

eyeNew.addEventListener("click", () => {
	if (pwNew.type === "password") {
		pwNew.type = "text";
		eyeNew.src = "assets/img/eye.svg";
	} else {
		pwNew.type = "password";
		eyeNew.src = "assets/img/eye-off.svg";
	}
});

eyeKonfirmasi.addEventListener("click", () => {
	if (pwKonfirmasi.type === "password") {
		pwKonfirmasi.type = "text";
		eyeKonfirmasi.src = "assets/img/eye.svg";
	} else {
		pwKonfirmasi.type = "password";
		eyeKonfirmasi.src = "assets/img/eye-off.svg";
	}
});

// Validation Password
errorOld = document.querySelector("#error-old");
errorNew = document.querySelector("#error-new");

pwOld.addEventListener("input", () => {
	validPw(pwOld.value);
});

function validPw(password) {
	console.log(password);
	var regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

	if (regex.test(password)) {
		errorOld.classList.add("hidden");
	} else {
		errorOld.classList.remove("hidden");
	}
}

// Data diri edit

const editProfile = document.getElementById("edit-profile");
const editAlamat = document.getElementById("edit-alamat");
const editKependudukan = document.getElementById("edit-kependudukan");
const editKeluarga = document.getElementById("edit-keluarga");

const tambahKeluarga = document.getElementById("tambah-keluarga");
const hapusKeluarga = document.querySelectorAll("#hapus-keluarga");
const noKeluarga = document.querySelectorAll("#no-keluarga");

const batalSimpanProfile = document.getElementById("batal-simpan-profile");
const batalSimpanAlamat = document.getElementById("batal-simpan-alamat");
const batalSimpanKependudukan = document.getElementById(
	"batal-simpan-kependudukan"
);
const batalSimpanKeluarga = document.getElementById("batal-simpan-keluarga");

const infoTglLahir = document.getElementById("info-tgl-lahir");
const phoneStatusAlamat = document.getElementById("phone-status-alamat");
const phoneStatusKependudukan = document.getElementById(
	"phone-status-kependudukan"
);

console.log(editProfile);
console.log(editAlamat);
console.log(editKependudukan);
console.log(editKeluarga);

editProfile.addEventListener("click", () => {
	editProfile.classList.toggle("hidden");
	batalSimpanProfile.classList.toggle("hidden");
	infoTglLahir.classList.toggle("hidden");
});

editAlamat.addEventListener("click", () => {
	editAlamat.classList.toggle("hidden");
	batalSimpanAlamat.classList.toggle("hidden");
	phoneStatusAlamat.classList.toggle("hidden");
});

editKependudukan.addEventListener("click", () => {
	document.getElementById("btn-ktp").classList.toggle("hidden");
	document.getElementById("btn-ktp-edit").classList.toggle("hidden");

	document.getElementById("btn-kk").classList.toggle("hidden");
	document.getElementById("btn-kk-edit").classList.toggle("hidden");

	editKependudukan.classList.toggle("hidden");
	batalSimpanKependudukan.classList.toggle("hidden");
	phoneStatusKependudukan.classList.toggle("hidden");
});

editKeluarga.addEventListener("click", () => {
	editKeluarga.classList.toggle("hidden");
	batalSimpanKeluarga.classList.toggle("hidden");
	tambahKeluarga.classList.toggle("hidden");
	hapusKeluarga.forEach((item) => {
		item.classList.toggle("hidden");
	});
	noKeluarga.forEach((item) => {
		item.classList.toggle("hidden");
	});
});

// Fungsi untuk menambahkan baris baru ke tabel
function addNewRow() {
	// Dapatkan elemen tbody dari tabel
	let tableBody = document.querySelector("table tbody");

	// Generate a unique number for the new row (you can customize this logic)
	let newRowNumber = tableBody.children.length + 1;

	// Buat konten HTML untuk baris baru
	let newRowHtml = `
		<tr class="*:p-4 *:font-bold">
			<td class="hapus-row text-center flex justify-center cursor-pointer">
				<p id="no-keluarga" class="hapus-row hidden">4</p>
				<span id="hapus-keluarga" class="hapus-row ">
					<svg
						width="44"
						height="28"
						viewBox="0 0 44 28"
						fill="none"
						class=""
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M21 6C20.6212 6 20.275 6.214 20.1056 6.55279L19.382 8H16C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10L16 20C16 21.1046 16.8954 22 18 22H26C27.1046 22 28 21.1046 28 20V10C28.5523 10 29 9.55228 29 9C29 8.44772 28.5523 8 28 8H24.618L23.8944 6.55279C23.725 6.214 23.3788 6 23 6H21ZM19 12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18V12ZM24 11C23.4477 11 23 11.4477 23 12V18C23 18.5523 23.4477 19 24 19C24.5523 19 25 18.5523 25 18V12C25 11.4477 24.5523 11 24 11Z"
							fill="#CB3A31" />
					</svg>
				</span>
			</td>
			<td class="-translate-y-[9px]">
				<input
					class="w-full px-3 py-2 rounded-lg border border-gray-100"
					type="text"
					placeholder="Nama..." />
			</td>
			<td class="-translate-y-[9px]">
				<select
					class="w-full px-3 py-2 rounded-lg border border-gray-100 text-gray-600"
					name=""
					id="">
					<option class="text-gray-600" disabled selected>
						Status Kawin
					</option>
				</select>
			</td>
			<td class="-translate-y-[9px]">
				<input
					class="w-full px-3 py-2 rounded-lg border border-gray-100"
					type="text"
					placeholder="Pekerjaan..." />
			</td>
			<td class="">
				<input
					class="w-full px-3 py-2 rounded-lg border border-gray-100"
					type="number"
					placeholder="Telepon..." />
				<p class="flex items-center text-gray-600 font-semibold">
					<svg
						width="17"
						height="16"
						viewBox="0 0 17 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.1501 8.0001C15.1501 11.5347 12.2847 14.4001 8.7501 14.4001C5.21548 14.4001 2.3501 11.5347 2.3501 8.0001C2.3501 4.46548 5.21548 1.6001 8.7501 1.6001C12.2847 1.6001 15.1501 4.46548 15.1501 8.0001ZM9.5501 4.8001C9.5501 5.24193 9.19193 5.6001 8.7501 5.6001C8.30827 5.6001 7.9501 5.24193 7.9501 4.8001C7.9501 4.35827 8.30827 4.0001 8.7501 4.0001C9.19193 4.0001 9.5501 4.35827 9.5501 4.8001ZM7.9501 7.2001C7.50827 7.2001 7.1501 7.55827 7.1501 8.0001C7.1501 8.44193 7.50827 8.8001 7.9501 8.8001V11.2001C7.9501 11.6419 8.30827 12.0001 8.7501 12.0001H9.5501C9.99193 12.0001 10.3501 11.6419 10.3501 11.2001C10.3501 10.7583 9.99193 10.4001 9.5501 10.4001V8.0001C9.5501 7.55827 9.19193 7.2001 8.7501 7.2001H7.9501Z"
							fill="#6F7072" />
					</svg>

					Berupa angka
				</p>
			</td>
		</tr>
	`;

	// Tambahkan baris baru ke elemen tbody
	tableBody.insertAdjacentHTML("beforeend", newRowHtml);
}

// Menambahkan event listener ke setiap elemen dengan ID 'hapus-keluarga'
document.querySelectorAll("#hapus-keluarga").forEach((item) => {
	item.addEventListener("click", function () {
		// Temukan elemen parent (tr) dari tombol hapus yang ditekan
		let rowToDelete = this.closest("tr");

		// Hapus baris dari tabel
		rowToDelete.remove();
	});
});

document.addEventListener("click", function (e) {
	console.log(e.target.classList.contains("hapus-row"));
	if (e.target.classList.contains("hapus-row")) {
		// Temukan elemen parent (tr) dari tombol hapus yang ditekan
		let rowToDelete = e.target.closest("tr");

		// Hapus baris dari tabel
		rowToDelete.remove();
	}
});
