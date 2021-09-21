const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const books = require('./routes/books');
const api = require('./routes/api');

require('dotenv').config();


const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(
    process.env.CONNECTION_URL,
    connectOptions,
    () => {console.log("Success!")}
);


const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send("Hello!")
})

app.use('/books', books);
app.use('/api', api); 

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}!`);
})