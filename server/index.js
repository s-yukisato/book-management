const express = require('express');
const cors = require('cors');

require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    return res.send("Hello!")
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}!`);
})