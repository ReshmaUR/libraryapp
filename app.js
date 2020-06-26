const express = require("express"); //importing express into our file using require method
const app = new express(); //init express
const indexRouter = express.Router(); //router for home page
const moreRouter = express.Router(); //router for more info
const arrivalsRouter = express.Router(); //router for new arrivals


// navbar
const nav = [
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/admin",name:"Add Books"},
    {link:"/admins",name:"Add Authors"},
    {link:"/",name:"Logout"}
    // {link:"/login",name:"Login"},
    // {link:"/signup",name:"Signup"}
];

// for welcome page
const welnav = [
    {link:"/login",name:"Login"},
    {link:"/signup",name:"Signup"}
    
];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(welnav);
const signupRouter = require("./src/routes/signupRoutes")(welnav);
const adminRouter = require("./src/routes/adminRoutes")(nav);
const adminsRouter = require("./src/routes/adminsRoutes")(nav);
const updateRouter = require("./src/routes/updateRoutes")(nav);
const deleteRouter = require("./src/routes/deleteRoutes")(nav);


app.use(express.urlencoded({extended:true}));  //mentioning the middleware
app.use(express.static("./public"));
app.set("view engine","ejs"); //setting template engine to ejs
app.set("views","./src/views"); //setting path
app.use("/more",moreRouter);
app.use("/arrivals",arrivalsRouter);
app.use("/index",indexRouter);
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/login",loginRouter);
app.use("/signup",signupRouter);
app.use("/admin",adminRouter);
app.use("/admins",adminsRouter);
app.use("/update",updateRouter);
app.use("/del",deleteRouter);
// welcome page
app.get("/",function(req,res){
    res.render("welcome",{
        welnav,
        title:"Library|Welcome"
    });
});
// index page
indexRouter.post("/",function(req,res){
    res.render("index",{
        nav,
        title:"Library|Home"
    });
});
indexRouter.get("/",function(req,res){
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
app.listen(5000);