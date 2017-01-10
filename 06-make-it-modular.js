var makeItModular = require('./06-make-it-modular-module');

var dir = process.argv[2];
var ext = process.argv[3];


makeItModular(dir, ext, function(err, files) {
    for (i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
})
