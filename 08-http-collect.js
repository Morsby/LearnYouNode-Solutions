const http = require('http');
const bl = require('bl');

var url = process.argv[2];

http.get(url, function callback(response) {
    response.pipe(bl(function(err, data) {
        if(err) {
            return console.error(err)
        }

        var data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
}).on('error', console.error);
