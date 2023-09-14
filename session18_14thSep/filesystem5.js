const fs = require('fs');

fs.readFile('test2.txt', 'utf-8', function(error) {
    if (error) {
        console.log('Error in reading file');
    } else {
        console.log('successfully read file');
    }
});