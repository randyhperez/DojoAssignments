const Player = require('mongoose').model('Player');

module.exports = {
    show(request, response){
        console.log('Controller - show')
        Player.find({})
          .then(result => response.json(result))
          .catch(error => console.log(error));
    },
    create(request, response){
        console.log('Controller - Create', request.body)
        Player.create(request.body)
          .then(result => response.json(result))
          .catch(error => console.log(error));
    },
    destroy(request, response){
        console.log('Controller - destroy', request.params.id)
        Player.findByIdAndRemove(request.params.id)
          .then(result => response.json(result))
          .catch(error => console.log(error));
    },
    update(request, response){
        console.log('Controller - update', request.params.id, request.body)
        Player.findByIdAndUpdate(request.params.id, request.body, { new: true })
          .then(result => response.json(result))
          .catch(error => error)
    }

}