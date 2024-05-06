// Get the button and dropdown menu
const btnKuliah = document.getElementById("perkuliahan");
const btnTugas = document.getElementById("tugas");
const arrowKuliah = document.getElementById("arrow-kuliah");
const arrowTugas = document.getElementById("arrow-tugas");
const dropdownKuliah = document.querySelector(".dropdown-kuliah");
const dropdownTugas = document.querySelector(".dropdown-tugas");

// Function to toggle dropdown menu visibility for Kuliah
function toggleDropdownKuliah() {
  const isOpen = !dropdownKuliah.classList.contains("open");
  dropdownKuliah.classList.toggle("open", isOpen);
  arrowKuliah.classList.toggle("-rotate-180", isOpen);
  localStorage.setItem("dropdownKuliahOpen", isOpen ? "true" : "false");
}

// Function to toggle dropdown menu visibility for Tugas
function toggleDropdownTugas() {
  const isOpen = !dropdownTugas.classList.contains("open");
  dropdownTugas.classList.toggle("open", isOpen);
  arrowTugas.classList.toggle("-rotate-180", isOpen);
  localStorage.setItem("dropdownTugasOpen", isOpen ? "true" : "false");
}

// Add event listener to the button to toggle dropdown menu visibility for Kuliah
btnKuliah.addEventListener("click", toggleDropdownKuliah);
btnTugas.addEventListener("click", toggleDropdownTugas);

// Load the state of the dropdown menus from local storage
document.addEventListener("DOMContentLoaded", function () {
  const dropdownKuliahOpen =
    localStorage.getItem("dropdownKuliahOpen") === "true";
  const dropdownTugasOpen =
    localStorage.getItem("dropdownTugasOpen") === "true";

  if (dropdownKuliahOpen) {
    dropdownKuliah.classList.add("open");
    arrowKuliah.classList.add("-rotate-180");
  }

  if (dropdownTugasOpen) {
    dropdownTugas.classList.add("open");
    arrowTugas.classList.add("-rotate-180");
  }
});

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
// Akhir Script Tab

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
    eyeOld.src = "/admin/src/img/eye-off.svg";
  } else {
    pwOld.type = "password";
    eyeOld.src = "/admin/src/img/eye.svg";
  }
});

eyeNew.addEventListener("click", () => {
  if (pwNew.type === "password") {
    pwNew.type = "text";
    eyeNew.src = "/admin/src/img/eye-off.svg";
  } else {
    pwNew.type = "password";
    eyeNew.src = "/admin/src/img/eye.svg";
  }
});

eyeKonfirmasi.addEventListener("click", () => {
  if (pwKonfirmasi.type === "password") {
    pwKonfirmasi.type = "text";
    eyeKonfirmasi.src = "/admin/src/img/eye-off.svg";
  } else {
    pwKonfirmasi.type = "password";
    eyeKonfirmasi.src = "/admin/src/img/eye.svg";
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
    // console.log("Password valid");
    // return true;
    errorOld.classList.add("hidden");
  } else {
    // return false;
    errorOld.classList.remove("hidden");
    // console.log("Password tidak valid");
  }
}

const btnEditProfile = document.querySelector("#btn-edit-profile");
const btnEditAddress = document.querySelector("#btn-edit-address");
const btnEditKependudukan = document.querySelector("#btn-edit-kependudukan");
const btnEditKeluarga = document.querySelector("#btn-edit-keluarga");

const btnUploadKTP = document.querySelector("#btn-upload-ktp");
const btnUploadKK = document.querySelector("#btn-upload-kk");
const btnSeeKTP = document.querySelector("#btn-see-ktp");
const btnSeeKK = document.querySelector("#btn-see-kk");

const btnTambahKolom = document.querySelector("#btn-tambah-kolom");
const titleAksi = document.querySelector("#title-aksi");
const titleNo = document.querySelector("#title-no");
const contentAksi1 = document.querySelector("#content-aksi1");
const contentNo1 = document.querySelector("#content-no1");
const contentAksi2 = document.querySelector("#content-aksi2");
const contentNo2 = document.querySelector("#content-no2");
const contentAksi3 = document.querySelector("#content-aksi3");
const contentNo3 = document.querySelector("#content-no3");
const contentTambah = document.querySelector("#content-tambah");
const btnSaveKeluarga = document.querySelector("#btn-save-keluarga");

const btnKependudukan = document.querySelector("#btn-kependudukan");
const btnProfile = document.querySelector("#btn-profile");
const btnAddress = document.querySelector("#btn-address");
const formatDate = document.querySelector("#format-date");
const formatNumber = document.querySelector("#format-number");
const formatNik = document.querySelector("#format-nik");

btnEditProfile.addEventListener("click", () => {
  btnEditProfile.classList.remove("flex");
  btnEditProfile.classList.add("hidden");
  btnProfile.classList.remove("hidden");
  formatDate.classList.remove("hidden");
});

btnEditAddress.addEventListener("click", () => {
  btnEditAddress.classList.remove("flex");
  btnEditAddress.classList.add("hidden");
  btnAddress.classList.remove("hidden");
  formatNumber.classList.remove("hidden");
});

btnEditKependudukan.addEventListener("click", () => {
  btnEditKependudukan.classList.remove("flex");
  btnEditKependudukan.classList.add("hidden");
  btnSeeKTP.classList.remove("flex");
  btnSeeKTP.classList.add("hidden");
  btnSeeKK.classList.remove("flex");
  btnSeeKK.classList.add("hidden");
  btnUploadKTP.classList.remove("hidden");
  btnUploadKK.classList.remove("hidden");
  btnKependudukan.classList.remove("hidden");
  formatNik.classList.remove("hidden");
});

btnEditKeluarga.addEventListener("click", () => {
  btnEditKeluarga.classList.remove("flex");
  btnEditKeluarga.classList.add("hidden");
  btnTambahKolom.classList.remove("hidden");
  titleAksi.classList.remove("hidden");
  titleNo.classList.add("hidden");
  contentAksi1.classList.remove("hidden");
  contentNo1.classList.add("hidden");
  contentAksi2.classList.remove("hidden");
  contentNo2.classList.add("hidden");
  contentAksi3.classList.remove("hidden");
  contentNo3.classList.add("hidden");
  contentTambah.classList.remove("hidden");
  btnSaveKeluarga.classList.remove("hidden");
});
