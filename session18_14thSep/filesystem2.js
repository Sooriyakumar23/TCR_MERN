const fs = require('fs');

fs.appendFileSync('test1.txt', '\n This text must be in the second line');

console.log('New line is appended in test1.txt');