const _ = require('lodash');  // _ is naming convention 

var data = ["tarun", "tarun", 1, 2, 3, 4, 2, 3, 1, "name", "age", "2"];

var result = _.uniq(data);
console.log(result);

console.log(_.isString('tarun'));//return true


