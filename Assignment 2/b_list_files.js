const fs = require('fs');

if (process.argv.length === 3) {
    const directory_path = process.argv[2];
    fs.readdir(directory_path, function (err, files) {
        if (err) {
            return (console.log('Unable to scan directory: ' + err));
        }
        files.forEach(file => console.log(file));
    });
} else {
    console.log('You need to give exactly one additional argument as directory path');
}