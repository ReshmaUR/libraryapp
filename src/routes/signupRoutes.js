const express = require("express"); //importing express into our file using require method
const signupRouter = express.Router(); //router for signup
function routersignup(nav){
signupRouter.get("/",function(req,res){
    res.render("signup",{
       title:"Signup page",
       nav 
    });
});
return signupRouter;
}
module.exports = routersignup;
