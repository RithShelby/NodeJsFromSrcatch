const { log } = require('console');
const fs = require('fs');

fs.readFile('myF.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading file' + err);
        return;
    }
    console.log('File Content is : ' + data);
});
console.log('Reading File ...');
