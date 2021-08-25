const ingredients = [];
const ingredientsPrices = {
	Cheese: 4,
	Tomato: 3,
	Egg: 5,
	Lettuce: 3,
	Mustard: 2,
	Ketchup: 2,
};
var basePrice = 12;
const additionalIngredients = [];

getIngredients();
console.log(ingredients);

var checkboxes = document.getElementsByClassName('ingredients__checkbox');

var addCheck = function () {
	var content = this.innerHTML;
	var ingredientName = this.parentElement.children[1].innerHTML;
	console.log(ingredientName);
	if (content == '') {
		this.innerHTML = '&#10003';
		additionalIngredients.push(ingredientName);
		console.log(additionalIngredients);
	} else {
		let index = additionalIngredients.indexOf(ingredientName);
		this.innerHTML = '';
		additionalIngredients.splice(index, 1);
		console.log(additionalIngredients);
	}
};

for (let i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('click', addCheck);
}

// Funzione per ottenere gli ingredienti dal file HTML
function getIngredients() {
	let ingredientsList = document.getElementsByClassName('ingredients__name');
	for (let i = 0; i < ingredientsList.length; i++) {
		const element = ingredientsList[i].innerHTML;
		ingredients.push(element);
	}
}

function calculateBurgerPrice() {
	document.getElementById('price').innerHTML = '$' + (basePrice + additionalIngredients * 4);
}
