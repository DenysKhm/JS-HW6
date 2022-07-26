const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
	event.preventDefault();
	if (loginForm.elements.email.value === "" || loginForm.elements.password.value === "") {
		alert("Усі поля повинні бути заповнені");
	} else {
		{
			console.log(`Email: ${loginForm.elements.email.value}, 
            Password: ${loginForm.elements.password.value}`);
			loginForm.reset();
		}
	}
});
