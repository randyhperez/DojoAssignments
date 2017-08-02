const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

require('./server/config/db_config');

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(express.static(path.join(__dirname, './public/dist')));

app.use('/api/notes', require('./server/config/routes/routes.js'));

const catchAll = require('./server/config/routes/catch-all.routes');
app.use(catchAll);

app.listen(port, console.log(`Listening on ${ port }`));