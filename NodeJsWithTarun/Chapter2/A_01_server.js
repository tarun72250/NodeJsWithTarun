console.log("server file is running");

// function add(a, b) {
// 	return a + b;
// }


//fn name 
// var add = function (a, b) {
// 	return a + b;
// }


//arrow function
// var add = (a, b) => { return a + b };


//
var add = (a, b) => a + b;

let result = add(41, 50);
console.log(result);


//now i write a fn which likhte k sath hi run ho jaye 
//As a result, it runs as soon as it's defined, without needing to be called separately.
(function () { console.log('tarun') })();


//callback function
/*function callback() {
	console.log("tarun rathore from callback");
}

var add = function (a, b, callback) {
	console.log(a + b);
	callback();
}

add(2, 3, callback);*/

//when u small this fn 



var add = function (a, b, tarun) {
	console.log(a + b);
	tarun();//when ever we call one fn inside another fn that is called as callback fn.
}


//anonymous fn
add(2, 3, function () {
	console.log("tarun from callback anonymous fn");
});

//more short arrow fn
add(2, 3, () => {
	console.log("tarun from callback arrow 1");
});

add(2, 3, () => console.log("tarun from callback arrow fn"));

