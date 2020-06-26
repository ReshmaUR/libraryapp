const express = require("express"); //importing express into our file using require method
const loginRouter = express.Router(); //router for login
function routerLogin(welnav){
    loginRouter.get("/",function(req,res){
        res.render("login",{
            welnav,
            title:"Login data"
        });
    });
return loginRouter;
}
module.exports = routerLogin;