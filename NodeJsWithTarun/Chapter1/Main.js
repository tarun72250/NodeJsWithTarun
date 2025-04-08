var a = 5;
var b = 6;
var ans = a + b;
console.log(ans);

const name = 'tarun Rathore';
console.log(name);

console.log(typeof (name));
console.log(typeof (a));
console.log(typeof (ans));


//array in js 
const cars = ["a", "b", "c"];
// console.log(cars);

cars.push("d");
// console.log(cars);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[3]);

//for loop
var count = 10;
for (var i = 1; i <= count; i++) {
	console.log(i);
}

//object in js 
const person = {
	name: "Tarun",
	age: 24
}

console.log(person.name);


//================
const ages = [21, 12, 13, 44];

const result = ages.filter(checkAge);
console.log(result);

function checkAge(age) {
	return age <= 18;
}


//==============take input from user using prompt
var prompt = require('prompt-sync')();
let age = prompt("enter your age");

if (age < 18) {
	console.log("u get 20% discount")
} else {
	console.log("u get 30% discount")
}





