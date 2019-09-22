var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){ 
    console.log(msg)
    io.emit('chat message', msg)   
    // socket.broadcast.emit('chat message', msg)
    
  });
  socket.on('add user', function(data){
    socket.username = username,
    msg = data
  });
  });

http.listen(port, function(){
  console.log('listening on *:' + port);
});
