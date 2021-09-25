const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const library = require('./routes/library');
const data = require('./routes/data');
const project = require('./routes/project');

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
});

app.use('/api/data', data); 
app.use('/api/v1/library', library);
app.use('/api/v1/document', project);

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}!`);
})