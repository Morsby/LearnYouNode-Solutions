const net = require('net');

var port = process.argv[2];

function now() {
    date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth()+1

    if (month < 10) {
        var month = "0"+month;
    }

    day = date.getDate();
    if (day < 10) {
        var day = "0"+day;
    }

    hours = date.getHours();
    if (hours < 10) {
        var hours = "0"+hours;
    }

    mins = date.getMinutes();
    if (mins < 10) {
        var mins = "0"+mins;
    }

    var dateString = year + "-" + month + "-" + day + " " + hours + ":" + mins

    return dateString;
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n');
})
server.listen(port)
