var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// POST method route
app.post('/alexa', function (req, res) {
    res.send('POST request to the homepage');
    io.emit('chat message', "sample");
    console.log("POST");
})

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
