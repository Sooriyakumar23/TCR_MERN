const fs = require('fs');

var content = fs.readFileSync('test1.txt').toString();

console.log(content);