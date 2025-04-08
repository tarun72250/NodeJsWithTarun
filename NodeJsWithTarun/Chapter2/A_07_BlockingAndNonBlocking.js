const fs = require('fs');



// console.log("A");
// //Blocking ....
// const result = fs.readFileSync('A_06_ContactRead.txt', 'utf-8');
// console.log(result);
// console.log("B");
//but here wait is seen like result is shown and after that B will print.
//so this is Blocking request or Synchronous request.


console.log("A");
//Non Blocking ....
fs.readFile('A_06_ContactRead.txt', 'utf-8', (err, result) => { console.log(result) });
console.log("B");
//so overall this will not wait/block for processing
//they will do their work.
//so this is Non-Blocking request or ASynchronous request.
//always do to prefer this


//if we want to chekc the thread size of our OS
const os = require('os');

console.log(os.cpus().length)//8