const file_name = process.argv[2];

const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('Give file name also in the console');
} else {
    try {
        var content1 = fs.readFileSync(file_name).toString();
        console.log(content1);
    } catch {
        console.log(`Error in reading file ${file_name} in synchronus mode`);
    }
    
    fs.readFile(file_name, 'utf-8', function(error, buffer) {
        if (error) {
            console.log('Error in reading file');
        } else {
            console.log(buffer.toString());
        }
    });
}