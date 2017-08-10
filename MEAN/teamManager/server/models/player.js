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
        type: String,
        required: true,
    },
    gw1: {
        type: String,
        default: 'undecided'
    },
    gw2: {
        type: String,
        default: 'undecided'
    },
    gw3: {
        type: String,
        default: 'undecided'
    }
}, { timestamps: true });

mongoose.model('Player', playerSchema);