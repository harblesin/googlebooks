const mongoose = require("mongoose");
const Schema = mongoose.Schema;

bookModel = new Schema({
  title: { type: String },
  subtitle: { type: String },
  author: { type: String },
  summary: { type: String },
  url: String
});

const Book = mongoose.model("Book", bookModel);

module.exports = Book;
