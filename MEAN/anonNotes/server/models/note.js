const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    }
}, {
    timestamps: true
});

mongoose.model('Note', noteSchema);