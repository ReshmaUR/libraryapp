const mongoose = require("mongoose"); //accessing the mongoose package
mongoose.connect("mongodb://localhost:27017/Library"); //database connection
const Schema = mongoose.Schema; //accessing schema from mongoose

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String,
    content: String
});
var Bookdata = mongoose.model("bookdata",BookSchema);
module.exports = Bookdata;

// ,{useNewUrlParser:true, useUnifiedTopology:true}