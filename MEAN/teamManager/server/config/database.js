const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const reg = new RegExp('.js$', 'i');

mongoose.connect('mongodb://localhost/teamManagerDB');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

mongoose.Promise = global.Promise;

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
})