const express = require("express"); //importing express into our file using require method
const addbookRouter = express.Router(); //router for adding book
function routerAdd(nav){
    addbookRouter.get("/",function(req,res){
        res.render("addbook",{
            nav,
            title:"Add book"
        });
    });
    return addbookRouter;
}
module.exports = routerAdd;
