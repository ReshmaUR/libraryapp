const express = require("express"); //importing express into our file using require method
const updateRouter = express.Router(); //router for updation
const Bookdata = require("../model/Bookdata");
function routerUps(nav){
    updateRouter.get("/",function(req,res){
        res.render("update",{                
            nav,
            title:"Update book"
        });
    });
    updateRouter.post("/",function(req,res){
        // const id = req.params.id;
        Bookdata.findByIdAndUpdate({_id},{$set:
            {title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            content: req.body.content}
        })
        .then(function(update){
            res.render("/addupdate",{
                nav,
                title:"Book data",
                update
            });
        });    
    });
    
    updateRouter.post("/addupdate",function(req,res){
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
    return updateRouter;
}
module.exports = routerUps;
