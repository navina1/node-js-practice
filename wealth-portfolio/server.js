const expres=require('express');
const mongoose=require("mongoose");
const assetRotes=require("./routes/AssetRoutes");
const bodyParser=require("body-parser")
const url=process.env.MONGO_URL;
const app=expres();
const port=3000;

mongoose.connect("mongodb+srv://knavina2:daWEtAfcCSdoqYkC@cluster0.tpivnp6.mongodb.net/wealthportfolio?retryWrites=true&w=majority")
    .then(()=>console.log('connected to mongodb'))
    .catch((err)=>console.log(err));

    app.use(bodyParser.json());
// Use asset routes
app.use('/api', assetRotes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
