document
	.getElementById("togglePassword")
	.addEventListener("click", function () {
		let x = document.getElementById("password");
		if (x.type === "password") {
			x.type = "text";
			this.src = "assets/img/eye.svg";
		} else {
			x.type = "password";
			this.src = "assets/img/eye-off.svg";
		}
	});

// Login
document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("login");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		const users = [
			{ email: "admin@gmail.com", password: "admin", role: "admin" },
			{
				email: "mahasiswa@gmail.com",
				password: "mahasiswa",
				role: "mahasiswa",
			},
			{ email: "dosen@gmail.com", password: "dosen", role: "dosen" },
		];

		const user = users.find(
			(user) => user.email === email && user.password === password
		);

		if (user) {
			// Arahkan ke halaman yang sesuai berdasarkan peran
			if (user.role === "admin") {
				window.location.href = "admin/profile.html";
			} else if (user.role === "mahasiswa") {
				window.location.href = "mahasiswa/dashboard.html";
			} else if (user.role === "dosen") {
				window.location.href = "dosen/dashboard.html";
			}
		} else {
			errorMessage.textContent = "Email atau password salah";
		}
	});
});
