const ingredients = [];
const additionalIngredients = [];
const discountCodes = ['DISCOUNT5', 'BOOLEAN'];
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
	return;
}

// Funzione per ottenere gli ingredienti dal file HTML
function getIngredients() {
	let ingredientsList = document.getElementsByClassName('ingredients__name');
	for (let i = 0; i < ingredientsList.length; i++) {
		const element = ingredientsList[i].innerHTML;
		ingredients.push(element);
	}
	return ingredients;
}

function calculateBurgerPrice() {
	let additionalPrice = 0;
	let discount = 0;
	const discountCode = document.getElementById('discountCode').value;
	let burgerName = document.getElementById('burgerName').value;

	//Ciclo all'interno dell'array additionalIngredients, andando poi a sommare il valore di tutti gli ingredienti aggiuntivi
	for (let i = 0; i < additionalIngredients.length; i++) {
		const element = ingredientsPrices[additionalIngredients[i]];
		additionalPrice += element;
	}

	// Controllo se e' stato inserito un codice sconto valido. Per ovvie ragioni i codici sconto dovrebbero essere tenuti in un database.
	if (discountCode != '' && discountCodes.includes(discountCode)) {
		discount = 5;
	}

	while (burgerName == '') {
		burgerName = prompt('Inserisci un nome per il panino');
	}
	const finalPrice = basePrice + additionalPrice - discount;
	//Calcolo del prezzo finale
	document.getElementById('price').innerHTML = '$' + finalPrice;

	console.log('Nome del panino: ', burgerName);
	console.log('Ingredienti aggiuntivi: ', additionalIngredients);
	console.log('Codice sconto: ', discountCode);
	console.log('Prezzo: ', finalPrice);
	return finalPrice;
}
