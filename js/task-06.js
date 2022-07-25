const input = document.querySelector("#validation-input");

input.addEventListener("blur", event => {
	if (event.target.value.length === Number(event.target.dataset.length)) {
		input.classList.remove("invalid");
		input.classList.add("valid");
	} else {
		input.classList.add("invalid");
	}
	console.log(event.target.value.length);
	console.log(event.target.dataset.length);
});
