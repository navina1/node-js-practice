const express=require("express");
const app=express();
const router=express.Router();
var bodyParser = require('body-parser');  //parses incoming requests of content types: application/x-www-form-

router.get("/",(req,res)=>{
    res.send("HELLOW WORLD")
});
app.use(router);

app.listen(3000,()=>{
    console.log("server is running")
})