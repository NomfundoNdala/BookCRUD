const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



app.get('/', (req, res) => {
    res.json({"message": "Welcome to my books server"});
});
require('./app/routes/book.routes.js')(app);

app.listen(process.env.node_port || 5000, () => {
    console.log("Server is listening on port ",process.env.node_port);
});
