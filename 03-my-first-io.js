var fs = require('fs');

let file = fs.readFileSync(process.argv[2])

str = file.toString();

let splittedFile = str.split('\n')

let newlines = splittedFile.length - 1

console.log(newlines)
