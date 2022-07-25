const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", event => {
	const size = event.target.value;
	text.style.fontSize = `${size}px`;
});
