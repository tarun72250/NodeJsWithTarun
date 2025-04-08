//1.Write a JavaScript program that prompts the user to enter their age and determines the discount
//  they are eligible for based on their age. If the age is less than 18, 
// the user should receive a 20% discount; if the age is between 18 and 65 (inclusive),
//  no discount is given; and if the age is greater than 65, the user should receive a 30% discount.
//  Use appropriate conditional statements to implement the logic accurately.

// var prompt = require('prompt-sync')();

// let age = prompt("Enter ur age");

// if (age < 18) {
// 	console.log("u got 20% discount bcoz child");
// } else if (age >= 18 && age <= 65) {
// 	console.log("u got no discount");
// } else if (age > 65) {
// 	console.log("u got 30% discount bcoz of senior citizen");
// }

//===================================================================
//2. 


// var prompt = require('prompt-sync')();

// let length = prompt('Enter length');
// let width = prompt('Enter width');

// let area = length * width;
// console.log("Area of Rectangle :-" + area);



// =====================================================================================
//3.

// let product = {
// 	name: "soap",
// 	price: 10,
// 	inStock: true
// }

// console.log(product.name);

//=====================================================================================
//4.
// let prompt = require('prompt-sync')();

// let guestList = ["ram", "rohan", "nilesh", "kapil", "arpna", "karishma"];

// let name = prompt("Enter name");

// let isFound = false;

// for (let i = 0; i < guestList.length; i++) {
// 	if (name == guestList[i]) {
// 		isFound = true;
// 		break;
// 	}
// }

// if (isFound) {
// 	console.log("Welcone " + name);
// } else {
// 	console.log("u are not invited");
// }


//================================================================
//5.
// Weather forecast JSON object
let weatherForecast = {
	date: "2025-04-05",
	temperature: {
		min: "18°C",
		max: "28°C"
	},
	conditions: "Partly Cloudy",
	humidity: "60%"
};

// Displaying the forecast info
console.log("🌤️ Weather Forecast for:", weatherForecast.date);
console.log("Temperature:");
console.log(" - Min:", weatherForecast.temperature.min);
console.log(" - Max:", weatherForecast.temperature.max);
console.log("Conditions:", weatherForecast.conditions);
console.log("Humidity:", weatherForecast.humidity);
