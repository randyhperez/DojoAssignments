const router = require('express').Router();
const noteController = require('../../controllers/notes.js')

module.exports = router
    .get('', noteController.show)
    .post('', noteController.create);