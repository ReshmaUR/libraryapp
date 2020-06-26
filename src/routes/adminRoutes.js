const express = require("express"); //importing express into our file using require method
const adminRouter = express.Router(); //router for adding book
const Bookdata = require("../model/Bookdata");
function routerAdd(nav){
    adminRouter.get("/",function(req,res){
        res.render("addbook",{
            nav,
            title:"Add book"
        });
    });
    
    adminRouter.post("/addbook",function(req,res){
       var item = {
           title: req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image: req.body.image,
           content: req.body.content
       }
       var book = Bookdata(item);
       book.save();
       res.redirect('/books');
    });
    return adminRouter;
}
module.exports = routerAdd;
