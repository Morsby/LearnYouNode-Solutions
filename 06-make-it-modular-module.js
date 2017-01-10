const fs = require('fs');
const path = require('path');



module.exports = function(dir, ext, callback) {
    var ext = "." + ext;
    fs.readdir(dir, function doneReading(err, files) {

        if (err) {
             callback(err, null);
        } else {
            var returnFiles = [];
            files.forEach(function(file) {
                if (path.extname(file) == ext) {
                    returnFiles.push(file)

                }
            });
            callback(null, returnFiles);
        }
    });

};
