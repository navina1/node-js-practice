const express=require("express");
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

const allData = [];
for (let i = 1; i <= 100; i++) {
  allData.push({ id: i, name: `Item ${i}` });
}

app.get("/data",(req,res)=>{
    const page=req.query.page || 0;
    const  limit=req.query.limit || 10;
    res.send(allData.slice(page*limit,(page+1)*limit))
});

app.listen(3000,()=>{
    console.log( "Server is running on http://localhost:3000/");
})  
