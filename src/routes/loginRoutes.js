const express = require("express"); //importing express into our file using require method
const loginRouter = express.Router(); //router for login
function routerLogin(nav){
    // login
loginRouter.get("/",function(req,res){
    res.render("login",{
       title:"Login page",
       nav
    });
});
return loginRouter;
}
module.exports = routerLogin;