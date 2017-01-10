const http = require('http');
const url = require('url');

var port = process.argv[2];
var post = process.argv[3];

var server = http.createServer(function(req, res) {
    path = url.parse(req.url).pathname;
    query = url.parse(req.url).query.substring(4);

    d = new Date(query)

    if (path == '/api/parsetime') {
        var result = {
            "hour" : d.getHours(),
            "minute" : d.getMinutes(),
            "second" : d.getSeconds()
        }


    }

    else if (path == '/api/unixtime') {
        var result = {
            "unixtime" : d.getTime()
        }
    } else {
        return 'Wrong path'
    }

    if(result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404);
        res.end()
    }
})

server.listen(port)
