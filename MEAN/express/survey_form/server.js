// get modules
const express = require('express');
const app = express();
const path = require('path')
const parser = require('body-parser');
const port = process.env.PORT || 8000;

// tell app to use body-parser for form data
app.use(parser.urlencoded({extended: true}));

// tells express to use ejs as templating engine
app.set('view engine', 'ejs');

// sets location for express to look for ejs views
app.set('views', path.resolve('views'));

// renders index page
app.get('/', function(request, response){
  console.log('at /');
  response.render('index');
});

// for result route renders page with form data sent over.
app.post('/result', function(request, response){
  console.log('at /result');
  const info = {
    name: request.body.name,
    loc: request.body.loc,
    lang: request.body.lang,
    comment: request.body.comment,
  }
  response.render('result', { info })
});

// tell server to listen on this port
app.listen(port, () => console.log(`Listening on ${port}`));
