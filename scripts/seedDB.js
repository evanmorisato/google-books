const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/GoogleBooks1",
	{ useNewUrlParser: true }
);

const bookSeed = [
 {
    authors: ["Stephen King"],
    title: "Different Seasons",
    description: "This gripping collection begins with 'Rita Hayworth and the Shawshank Redemption,' in which an unjustly imprisoned convict seeks a strange and startling revenge--the basis for the Best Picture Academy Award-nominee The Shawshank Redemption.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:Different+Seasons&hl=&source=gbs_api"
 }
]


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });