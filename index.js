const express = require('express');
const app = express();
const path = require('path');
const io = require('socket.io')(app);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', socket => {
  const id=socket.id;

  socket.on('disconnect', () => {
    io.emit('chat message', `${id} disconnected`);
  });

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

listen(3001, () => {
  console.log('listening on *:3001');
});
