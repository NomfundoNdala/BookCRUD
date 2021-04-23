const Note = require("../models/book.model.js");

exports.create = (req, res) => {
  if (!req.body.description) {
    return res.status(400).send({
      message: "Book content can not be empty",
    });
  }

  const note = new Note({
    title: req.body.name || "Untitled book",
    description: req.body.description,
    urlImage: req.body.urlImage,
    author: req.body.author,
  });

  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the book.",
      });
    });
};

exports.findAll = (req, res) => {
  Note.find()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
    });
};

exports.findOne = (req, res) => {
  Note.findById(req.params.id)
    .then((book) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving book with id " + req.params.id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  Note.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name || "Untitled Note",
      description: req.body.description,
    },
    { new: true }
  )
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating book with id " + req.params.id,
      });
    });
};

exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      res.send({ message: "Book deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete book with id " + req.params.id,
      });
    });
};
