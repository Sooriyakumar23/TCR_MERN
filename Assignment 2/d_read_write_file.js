const fs = require('fs');

if (process.argv.length === 4) {
    try {
        const read_file_name = process.argv[2];
        const write_file_name = process.argv[3];

        var content = fs.readFileSync(read_file_name).toString();

        fs.appendFileSync(write_file_name, content);
    } catch {
        console.log('Unable to read first file or write it into second file');
    }
} else {
    console.log('You must provide two file names only');
}