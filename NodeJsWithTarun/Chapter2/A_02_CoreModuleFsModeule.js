//Core module :- Node modules which are installed in node installation.
//they are already defined and their functionality can be used for developing appn.
// Ex :- http , fs , url , os , utils , events.


//details about your OS.
var os = require('os');
var user = os.userInfo();
console.log(user);
console.log(user.username);


var fs = require('fs');
fs.appendFile('greeting.txt', 'Hi from tarun ' + '!\n', () => { console.log('file created') });

