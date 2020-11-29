const { io } = require('../index');

io.on('connection', client=>{
    console.log('Client conected');
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
    client.on('message', (payload) => {
        console.log('message', payload);
        client.emit('message', { admin: 'Hi there' });
    });
});