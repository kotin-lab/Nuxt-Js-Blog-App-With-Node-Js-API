const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nuxtblogapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log('Database connected.');
  }
});