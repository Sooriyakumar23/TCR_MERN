const fs = require('fs');

fs.unlinkSync('test3.txt');

console.log('test3.txt - has been deleted');

fs.renameSync('Test2.txt', 'test2.txt');

console.log('File has been Renamed :)');