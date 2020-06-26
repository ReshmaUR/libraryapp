const express = require("express"); //importing express into our file using require method
const deleteRouter = express.Router();
const Bookdata = require("../model/Bookdata");
function routerDel(nav){
    deleteRouter.get("/",function(req,res){
        res.render("delete",{                
            nav,
            title:"Delete book"
        });
    });
    deleteRouter.post("/:id",function(req,res){
        const id = req.params.id;
        Bookdata.findOneAndRemove({_id: id})
        .then(function(del){
            res.render("/adddelete",{
                nav,
                title:"Delete book",
                del
            });
            res.redirect('/books');
        });    
    });
    
    // deleteRouter.post("/adddel",function(req,res){
    //    var item = {
    //        title: req.body.title,
    //        author: req.body.author,
    //        genre: req.body.genre,
    //        image: req.body.image,
    //        content: req.body.content
    //    }
    //    var book = Bookdata(item);
    //    book.save();
    //    res.redirect('/books');
    // });
    return deleteRouter;
}
module.exports = routerDel;