const fs = require('fs');


//Syns call
// fs.writeFileSync('./A_05_FileDemo.txt', 'Hii all.....!');

//Async call , if asyn call we pass one fn as an 3 arguement.
// fs.writeFile('./A_05_FileDemo.txt', 'Hii all from Async.....!', (err) => { });


//if i want to read data from A_06_ContactRaed.txt
// const result = fs.readFileSync('./A_06_ContactRead.txt', 'utf-8');
// console.log(result);



//if asyn call fn call , this expect u pass third arugument as callback fn, inside this err or result pass , 
//it means asyn func not return anything , they execute your result.	 
// fs.readFile('./A_06_ContactRead.txt', 'utf-8', (err, result) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(result);
// 	}
// })



//i want to append the existing file 
//do not overside data
fs.appendFileSync('A_05_FileDemo.txt', 'Hii\n');