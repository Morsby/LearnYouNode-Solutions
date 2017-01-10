const http = require('http');
const bl = require('bl');

var contents = [];
var counts = 0;


var getContents = function(index) {
    url = process.argv[2 + index]
    http.get(url, function got(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err)
            }

            var data = data.toString();

            contents[index] = data;
            counts++;
            if (counts == 3) {
                printResults()
            }
        }));

    })
}

printResults = function() {
    for(var i = 0; i < 3; i++) {
        console.log(contents[i]);
    }
}


for (var i = 0; i < 3; i++ ) {
    getContents(i)
}
