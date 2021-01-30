const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const axios = require('axios');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 3000;

app.get('/api/test', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});

