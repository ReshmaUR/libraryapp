const express = require("express"); //importing express into our file using require method
const app = new express(); //init express
const moreRouter = express.Router(); //router for more info
const arrivalsRouter = express.Router(); //router for new arrivals
const loginRouter = express.Router(); //router for login
const signupRouter = express.Router(); //router for signup
const addbookRouter = express.Router(); //router for adding book

const nav = [
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/addbook",name:"Add Books"},
    {link:"/login",name:"Login"},
    {link:"/signup",name:"Signup"}
];
const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);

app.use(express.static("./public"));
app.set("view engine","ejs"); //setting template engine to ejs
app.set("views","./src/views"); //setting path
app.use("/more",moreRouter);
app.use("/arrivals",arrivalsRouter);
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/login",loginRouter);
app.use("/signup",signupRouter);
app.use("/addbook",addbookRouter);
app.get("/",function(req,res){
    res.render("index",{
        nav,
        title:"Library|Home"
    });
});
moreRouter.get("/",function(req,res){
    res.render("more",{
        nav,
        title:"Home|More info"
    })
});
arrivalsRouter.get("/",function(req,res){
    res.render("arrivals",{
        nav,
        title:"Home|New Arrivals"
    })
});
loginRouter.get("/",function(req,res){
    res.render("login",{
       title:"Login page" 
    });
});
signupRouter.get("/",function(req,res){
    res.render("signup",{
       title:"Signup page" 
    });
});
addbookRouter.get("/",function(req,res){
    res.render("addbook",{
        nav,
        title:"Add book"
    });
    // res.send("This book hasbeen added successfully");
})
app.listen(5000);