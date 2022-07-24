const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsItem = document.querySelector("#ingredients");
const elements = [];

for (let item of ingredients) {
	const createLi = document.createElement("li");
	createLi.textContent = item;
	createLi.classList.add("item");
	elements.push(createLi);
}

ingredientsItem.append(...elements);
