const express = require("express"); //importing express into our file using require method
const adminRouter = express.Router(); //router for adding book
function routerAdd(nav){
    adminRouter.get("/",function(req,res){
        res.render("addbook",{
            nav,
            title:"Add book"
        });
    });
    adminRouter.get("/addbook",function(req,res){
        res.send("Hey i am added");
    });
    return adminRouter;
}
module.exports = routerAdd;
