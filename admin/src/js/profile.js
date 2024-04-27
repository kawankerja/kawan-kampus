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
		eyeOld.src = "src/img/eye-off.svg";
	} else {
		pwOld.type = "password";
		eyeOld.src = "src/img/eye.svg";
	}
});

eyeNew.addEventListener("click", () => {
	if (pwNew.type === "password") {
		pwNew.type = "text";
		eyeNew.src = "src/img/eye-off.svg";
	} else {
		pwNew.type = "password";
		eyeNew.src = "src/img/eye.svg";
	}
});

eyeKonfirmasi.addEventListener("click", () => {
	if (pwKonfirmasi.type === "password") {
		pwKonfirmasi.type = "text";
		eyeKonfirmasi.src = "src/img/eye-off.svg";
	} else {
		pwKonfirmasi.type = "password";
		eyeKonfirmasi.src = "src/img/eye.svg";
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

// Data diri edit
