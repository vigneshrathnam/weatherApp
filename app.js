const express=require("express");
const port=5000;
const dotenv=require("dotenv");
const ejs=require("ejs");
const mailer=require("node-mailer");
const ejsLayouts=require("express-ejs-layouts");
const nedb=require("nedb");

const app=express();

//Public files
app.use(express.static("./public"));

//Setting view engine
app.set('view engine', 'ejs');

//Setting template for EJS
app.use(ejsLayouts);

//Routes
app.use("/data",require("./routes/weatherdata"));
app.use("/",require("./routes/index"));

//App Setup
app.listen(port,()=>{ console.log(`Server is started at http://localhost:${port}`); });
