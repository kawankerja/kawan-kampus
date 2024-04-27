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
