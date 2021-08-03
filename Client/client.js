const config = require('./config.json');
const io = require('socket.io-client');
const socket = io(config.address + ':' + config.port);

console.log('Node client started');

socket.on('connect', ()=>{
    console.log('Connected with ID:', socket.id);
});
socket.on('disconnect', ()=>{
    console.log('Disconnected');
})
socket.on('error', (event)=>{
    console.log('Error:', event);
});
// socket.on('reconnect', (event)=>{
//     console.log('Reconnected:', event);
// });
// socket.on('reconnecting', ()=>{
//     console.log('Reconnecting');
// });
// socket.on('reconnect_attempt', (event)=>{
//     console.log('Reconnect attempt:', event);
// });
// socket.on('reconnect_error', (event)=>{
//     console.log('Reconnect error:', event);
// });
// socket.on('reconnect_failed', (event)=>{
//     console.log('Reconnect failed:', event);
// });