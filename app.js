const express = require("express"); //importing express into our file using require method
const app = new express(); //init express
const moreRouter = express.Router(); //router for more info
const arrivalsRouter = express.Router(); //router for new arrivals
const addbookRouter = express.Router(); //router for adding book

// navbar
const nav = [
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/addbook",name:"Add Books"},
    {link:"/login",name:"Login"},
    {link:"/signup",name:"Signup"}
];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const signupRouter = require("./src/routes/signupRoutes")(nav);

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
// home page
app.get("/",function(req,res){
    res.render("index",{
        nav,
        title:"Library|Home"
    });
});
// loading more details
moreRouter.get("/",function(req,res){
    res.render("more",{
        nav,
        title:"Home|More info"
    })
});
// new arrivals
arrivalsRouter.get("/",function(req,res){
    res.render("arrivals",{
        nav,
        title:"Home|New Arrivals"
    })
});

// adding book
addbookRouter.get("/",function(req,res){
    res.render("addbook",{
        nav,
        title:"Add book"
    });
})
app.listen(5000);