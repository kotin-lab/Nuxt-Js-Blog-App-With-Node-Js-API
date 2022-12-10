const route = require('express').Router();
const Blog = require('../models/Blog');

// Create new post
route.post('/posts', (req, res) => {
  const { title, des } = req.body;

  if (!title || !des) {
    return res.status(400).json({
      error: 'All fields are required.'
    });
  }

  Blog.create({ title, des })
    .then(data => {
      res.json({
        data,
        message: 'Post created successfully'
      });
    }).catch(err => console.log(err));
});

// Get posts
route.get('/posts', (req, res) => {
  Blog.find({})
    .sort({date: 'DESC'})
    .then(result => {
      res.json({data: result});
    }).catch(err => console.log(err));
});

// Find post
route.get('/posts/:id', async (req, res) => {
  const blogPost = await Blog.findById(req.params.id);

  if (!blogPost) {
    return res.status(404).json({error: 'Post not found'});
  }
  
  res.json({data: blogPost});
});

// Delete post
route.delete('/posts/:id', (req, res) => {
  Blog.findByIdAndDelete({_id: req.params.id})
    .then(result => {
      res.json({message: 'Post deleted successfully.'});
    })
    .catch(err => console.log(err));
});

module.exports = route;