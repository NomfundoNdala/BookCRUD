module.exports = (app) => {
    const notes = require('../controllers/book.controller.js');

    app.post('/books', notes.create);

    app.get('/books', notes.findAll);

    app.get('/books/:Id', notes.findOne);

    app.put('/books/:Id', notes.update);

    app.delete('/books/:Id', notes.delete);
}
