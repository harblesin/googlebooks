const mongoose = require("mongoose");
const Schema = mongoose.Schema;

bookModel = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  url: String
});

const Book = mongoose.model("Book", bookModel);

module.exports = Book;
