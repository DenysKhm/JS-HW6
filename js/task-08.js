const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
	event.preventDefault();
	const { email, password } = loginForm.elements;
	if (email.value === "" || password.value === "") {
		alert("Усі поля повинні бути заповнені");
	} else {
		{
			console.log(`Email: ${email.value}, 
            Password: ${password.value}`);
			loginForm.reset();
		}
	}
});
