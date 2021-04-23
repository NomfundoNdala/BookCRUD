const Book = require('../models/book');

// returns a list of books
exports.getBooks = (req, res, next) => {
  Book.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
};

// adds a book
exports.addBook = (req, res, next) => {
  Book.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// edits a book
exports.editBook = (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(201).json(data);
    }
  });
};

// deletes a book
exports.deleteBook = (req, res, next) => {
  Book.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};

// get one book
exports.getBookById = (req, res, next) => {
  Book.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};
