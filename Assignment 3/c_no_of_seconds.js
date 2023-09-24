const fs = require('fs');

let no_of_seconds_in_a_year = null;
let no_of_seconds_in_100_year = null;

no_of_seconds_in_a_year = (new Date('01/01/2024') - new Date('01/01/2023')) / 1000;
no_of_seconds_in_100_year = (new Date('01/01/2024') - new Date('01/01/1924')) / 1000;

let content = `Number of seconds in a year: ${no_of_seconds_in_a_year}.\nNumber of seconds in 100 years: ${no_of_seconds_in_100_year}.`;

fs.writeFileSync('seconds.txt', content);