const mongoose = require('mongoose');

// Book model
const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      required : true
    },
    author: {
      type: String,
      required : true
    },
    description: {
      type: String,
      required : true
    },
    picture: {
      type: String,
      required : true
    }
  }, {
    collection: 'books'
  });

module.exports = mongoose.model('Book', bookSchema);