const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id : String,
    name : String,
    urlImage : String,
    description : String,
    author : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
