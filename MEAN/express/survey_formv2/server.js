const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(parser.urlencoded({ extended: true }));

const server = app.listen(port, () => console.log(`Listening on ${ port }`));
const io = require('socket.io')(server);

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index');
});

io.on('connection', socket => {
  console.log('connection');

  socket.on('posting_form', function(data){
    console.log('in posting form');
    var randNum = Math.floor(Math.random() * 1000) + 1;
    socket.emit('updated_message', {response: data})
    socket.emit('random_number', randNum)
  });

});
