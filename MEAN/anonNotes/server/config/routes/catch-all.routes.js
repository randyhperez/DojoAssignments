const router = require('express').Router();
const path = require('path');

module.exports= router
    .all('*', function(request, response){
        response.sendfile(__dirname, '../../../public/dist/index.html');
    })