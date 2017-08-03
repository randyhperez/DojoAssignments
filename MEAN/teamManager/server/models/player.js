const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    position: {
        position: String
    },
    action: {
        type: String,
        default: 'undecided'
    }
}, { timestamps: true });

mongoose.model('Player', playerSchema);