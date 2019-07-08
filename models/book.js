const mongoose = require("mongoose");
const Schema = mongoose.Schema;

bookModel = new Schema({
  title: { type: String },
  subtitle: { type: String },
  author: { type: Array },
  summary: { type: String },
  url: String,
  link: String
});

const Book = mongoose.model("Book", bookModel);

module.exports = Book;
