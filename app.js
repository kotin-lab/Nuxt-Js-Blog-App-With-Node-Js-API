const express = require('express');
const app = express();

const PORT = 8080;

require('./models/db');

app.get('/', (req, res) => {
  res.send('Hello node js.');
});

app.listen(PORT, (req, res) => {
  console.log(`Server running is at ${PORT}`);
});