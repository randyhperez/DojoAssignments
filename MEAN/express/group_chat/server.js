const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(parser.urlencoded({ extended: true}));

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => console.log(`listening on ${ port }`));
const io = require('socket.io')(server);

app.get('/', function(request, response) {
  response.render('index')
});

const messages = [];

io.on('connection', socket => {
  console.log('connection');
  socket.on('new_user', data => {
    console.log(data);
    socket.emit('user_join', messages);
  });
  socket.on('new_msg', data => {
    messages.push({
      name: data.name,
      message: data.message,
    });
    console.log(messages);
    io.emit('msg_created', data)
  });
});
