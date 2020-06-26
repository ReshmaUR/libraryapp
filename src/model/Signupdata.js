const mongoose = require("mongoose"); //accessing the mongoose package
mongoose.connect("mongodb://localhost:27017/Library"); //database connection
const Schema = mongoose.Schema; //accessing schema from mongoose

const SignupSchema = new Schema({
    username: String,
    email: String,
    mobile: String,
    createpass: String,
    confirmpass: String
});
var Signupdata = mongoose.model("signupdata",SignupSchema);
module.exports = Signupdata;