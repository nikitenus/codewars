// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

function fuelPrice(litres, pricePerLitre) {
	if (litres >= 10) {
		return Math.round((litres * pricePerLitre - litres * 0.25) * 100) / 100
	}
	if (litres >= 8) {
		return Math.round((litres * pricePerLitre - litres * 0.2) * 100) / 100
	}
	if (litres >= 6) {
		return Math.round((litres * pricePerLitre - litres * 0.15) * 100) / 100
	}
	if (litres >= 4) {
		return Math.round((litres * pricePerLitre - litres * 0.1) * 100) / 100
	}
	if (litres >= 2) {
		return Math.round((litres * pricePerLitre - litres * 0.05) * 100) / 100
	} else return Math.round(litres * pricePerLitre * 100) / 100
}

console.log(fuelPrice(5, 1.23))
console.log(fuelPrice(8, 2.5))
console.log(fuelPrice(5, 5.6))
