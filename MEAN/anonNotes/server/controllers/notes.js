const Note = require('mongoose').model('Note');

module.exports = {
    show(request, response){
        console.log('Note Routes .Show')
        Note.find({}).sort('-createdAt')
          .then(function(notes){
              response.json(notes);
          })
          .catch(function(error){
              console.log(error);
          });
    },
    create(request, response){
        const note = new Note(request.body);
        console.log('Controller: Creating note', note)
        note.save()
            .then(function(note){
                response.json(note);
            })
            .catch(function(error){
                console.log(error);
            });
    },
};