const express = require("express"); //importing express into our file using require method
const signupRouter = express.Router(); //router for signup
const Signupdata = require("../model/Signupdata");
function routersignup(welnav){
    signupRouter.get("/",function(req,res){
        res.render("signup",{
            welnav,
            title:"Signup data"
        });
    });
    signupRouter.post("/",function(req,res){
        Signupdata.find()
        .then(function(signup){
            res.render("addsignup",{
                welnav,
                title:"Signup data",
                signup
            });
        });    
    });
    signupRouter.post("/addsignup",function(req,res){
       var item = {
           username: req.body.username,
           email: req.body.email,
           mobile: req.body.mobile,
           createpass: req.body.createpass,
           confirmpass: req.body.confirmpass
       }
       var signup = Signupdata(item);
       signup.save();
       res.redirect('/login');
    });
return signupRouter;
}
module.exports = routersignup;
