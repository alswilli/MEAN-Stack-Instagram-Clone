const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  caption: { type: String, required: true },
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
