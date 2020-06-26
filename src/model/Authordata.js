const mongoose = require("mongoose"); //accessing the mongoose package
mongoose.connect("mongodb://localhost:27017/Library"); //database connection
const Schema = mongoose.Schema; //accessing schema from mongoose

const AuthorSchema = new Schema({
    title: String,
    field: String,
    image: String,
    content: String
});
var Authordata = mongoose.model("authordata",AuthorSchema);
module.exports = Authordata;