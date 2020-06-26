const express = require("express"); //importing express into our file using require method
const adminsRouter = express.Router(); //router for adding book
const Authordata = require("../model/Authordata");
function routerAdd(nav){
    adminsRouter.get("/",function(req,res){
        res.render("addauthor",{
            nav,
            title:"Add author"
        });
    });
    adminsRouter.post("/addauthor",function(req,res){
       var item = {
           title: req.body.title,
           field: req.body.field,
           image: req.body.image,
           content: req.body.content
       }
       var author = Authordata(item);
       author.save();
       res.redirect('/authors');
    });
    return adminsRouter;
}
module.exports = routerAdd;