const express = require('express');
const app = express();
const route = require('./routes/index');
const bodyParser = require('body-parser');

const PORT = 8080;

require('./models/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(route);

app.get('/', (req, res) => {
  res.send('Hello node js.');
});

app.listen(PORT, (req, res) => {
  console.log(`Server running is at ${PORT}`);
});