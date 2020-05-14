// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const bookSchema = new Schema({
	title: { type: String },
	authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String }
});

//Setting schema to variable
const Book = mongoose.model("Book", bookSchema);

//Exporting
module.exports = Book;