const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.resolve('client')));

// save server
const server = app.listen(port, () => console.log(`listening on port ${ port }`));

// feed server to socket io... require and pass something immediately
// is event listener
const io = require('socket.io')(server);

let number = 0;

io.on('connection', socket => {
  console.log('connection');

  socket.on('buttonClicked', () => {
    numberUpdated(++number);
  });

  socket.on('resetClicked', function() {
    number = 0;
    numberUpdated(number = 0);
  });

  socket.on('userJoin', () => {
    socket.emit('numberUpdated', number);
  });

});

function numberUpdated(number) {
  io.emit('numberUpdated', number)
}
