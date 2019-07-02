const mongoose = require("mongoose");
const Schema = mongoose.Scheme;

bookModel = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  image: String
});

const Book = mongoose.model("Book", bookModel);

module.exports = Book;
