const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express()

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// DB
require('./server/config/database');

// Angular
app.use(express.static(path.join(__dirname, './public/dist')));

// routes 
app.use('/api/player', require('./server/config/routes/routes.js'));

// catch all
const catchAll = require('./server/config/routes/catch-all.routes.js');
app.use(catchAll)

app.listen(port, console.log(`listening on ${ port }`));