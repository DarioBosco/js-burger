const ingredients = [];
const additionalIngredients = [];
const ingredientsPrices = {
	Cheese: 4,
	Tomato: 3,
	Egg: 5,
	Lettuce: 3,
	Mustard: 2,
	Ketchup: 2,
};
const basePrice = 12;
var checkboxes = document.getElementsByClassName('ingredients__checkbox');

getIngredients();
addCheckBoxes();
console.log(ingredients);

//Funzione per trovare le varie checkbox degli ingredienti e aggiungere o rimuovere la spunta. Aggiunge inoltre gli elementi selezionati ad additionalIngredients[]
function addCheckBoxes() {
	var addCheck = function () {
		var content = this.innerHTML;
		var ingredientName = this.parentElement.children[1].innerHTML;
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
	var additionalPrice = 0;
	//Ciclo all'interno dell'array additionalIngredients, andando poi
	for (let i = 0; i < additionalIngredients.length; i++) {
		const element = ingredientsPrices[additionalIngredients[i]];
		additionalPrice += element;
	}
	document.getElementById('price').innerHTML = '$' + (basePrice + additionalPrice);
}
