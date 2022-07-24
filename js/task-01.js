const title = document.querySelectorAll(".item");
console.log(`Number of categories: ${title.length}`);

const item = document.querySelector(".item");
const firstItem = item.firstElementChild;
console.log(`Category: ${firstItem.textContent}`);

const itemAllLi = item.lastElementChild.children;
console.log(`Elements: ${itemAllLi.length}`);

const secondItem = item.nextElementSibling;
const secondItemUl = secondItem.firstElementChild;
console.log(`Category: ${secondItemUl.textContent}`);

const secondItemLi = secondItem.lastElementChild.children;
console.log(`Elements: ${secondItemLi.length}`);

const thirdItem = secondItem.nextElementSibling;
const thirdItemUl = thirdItem.firstElementChild;
console.log(`Category: ${thirdItemUl.textContent}`);

const thirdItemLi = thirdItem.lastElementChild.children;
console.log(`Elements: ${thirdItemLi.length}`);

// const categoriesElems = document.querySelectorAll("#categories > li");
// console.log(`Number of categories: ${categoriesElems.length}`);

// for (let elem of categoriesElems) {
// 	console.log(`Category: ${elem.firstElementChild.textContent}`);
// 	console.log(`Elements: ${elem.lastElementChild.childElementCount}`);
// }
