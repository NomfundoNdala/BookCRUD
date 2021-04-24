const mongoose = require('mongoose');

// Book model
const bookSchema = new mongoose.Schema({
    title: {
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
    urlImage: {
        type: String,
        required : true
      },
      id: {
        type: String
      }
  }, {
    collection: 'books'
  });

module.exports = mongoose.model('Book', bookSchema);