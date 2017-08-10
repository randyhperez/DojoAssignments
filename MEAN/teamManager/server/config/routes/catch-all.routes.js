const path = require('path');
const router = require('express').Router();

module.exports = router
    .all('*', function(request, response){
        response.sendFile(path.join(__dirname, '../../../public/dist/index.html'));
    });