const router = require('express').Router();
const playerController = require('../../controllers/players.js');

module.exports = router
    .get('', playerController.show)
    .post('', playerController.create)
    .delete('/:id', playerController.destroy)
    .put('/:id', playerController.update)