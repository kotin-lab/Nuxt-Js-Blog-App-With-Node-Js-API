const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  title: {
    type: String
  },
  des: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BlogPost', blogSchema);