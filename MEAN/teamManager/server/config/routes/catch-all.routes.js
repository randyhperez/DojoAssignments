const path = require('path');
const router = require('express').Router();

module.exports = router
    .all('*', function(request, response){
        response.sendFile(__dirname, '../../../public/dist/index.html');
    });