const fs = require('fs');

fs.writeFile('test2.txt', 'Student Info', function(error) {
    if (error) {
        console.log('Error has been occurred');
    } else {
        console.log('Writing File in ASYNC mode');
    }
})