const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const { Schema } = mongoose;

const app = express();

app.use(parser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

mongoose.connect('mongodb://localhost/message_board');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

const MessageSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
    minlength: [4, 'Name must be 4 characters or more'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message field is requried'],
    trim: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
}, { timestamps: true });

const CommentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
    minlength: [4, 'Name must be 4 characters or more'],
    trim: true
  },
  comment: {
    type: String,
    required: [true, 'Message field is required'],
    trim: true
  },
  message: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }
});

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', function(request, response){
  // render page messages and comments
  console.log('In /');
  Message.find({}).populate('comments').exec()
    .then(function(messages){
      console.log(messages);
      response.render('index', { messages });
    })
    .catch(function(error){
      console.log(error);
    })
});

app.post('/message', function(request, response){
  // submits message to db
  console.log('In /message');
  Message.create(request.body)
    .then(function(message){
      console.log(message);
      response.redirect('/');
    })
    .catch(function(error){
      console.log(error);
      response.render('errorpage', {
        errors: Object.keys(error.errors).map(errorKey => error.errors[errorKey].message)
      });
    });
});

app.post('/comment/:id', function(request, response){
  // submits comments to db
  console.log('In /comment');
  request.body.message = request.params.id
  Comment.create(request.body)
    .then(function(comment){
      console.log(`comment: ${ comment }`);

      return Message.findById(request.params.id)
        .then(function(message){
          console.log(`message: ${ message }`);

          if(!message){
            throw new Error('Can not find message')
          }

          message.comments.push(comment);

          return message.save()
            .then(function(){
              response.redirect('/');
            });
        });
    })
    .catch(function(error){
      console.log(error);
      response.render('errorpage', {
        errors: Object.keys(error.errors).map(errorKey => error.errors[errorKey].message)
      });
    });
});

app.listen(port, () => console.log(`Listening on ${ port }`));
