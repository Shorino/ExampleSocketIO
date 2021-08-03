const config = require('./config.json');
const io = require('socket.io')(config.port);

console.log('Node server started on port', config.port);

io.on('connection', (socket) =>{
    console.log('A user has connected with ID:', socket.id);

    socket.on('disconnect', () =>{
        console.log('A user has disconnected with ID:', socket.id);
    });
    socket.on('test-message', (data) =>{
        console.log('test-message:', data);
        
        socket.emit('test-message', {c: data.a, d: data.b});
    });
});