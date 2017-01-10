var fs = require('fs');
let file = process.argv[2];


fs.readFile(file, "utf8", function doneReading(err, data) {
    if(err) {
        return console.log(err);
    }
    let newlines = data.split("\n").length-1
    console.log(newlines)
    });
