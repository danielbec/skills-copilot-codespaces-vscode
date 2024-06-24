// Create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const comments = require('./comments.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Get all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment
app.post('/api/comments', (req, res) => {
  let newComment = {
    id: Date.now(),