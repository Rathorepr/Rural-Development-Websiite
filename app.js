require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const homeRouter = require('./routers/homeRouter');



const port = process.env.PORT || 8080;
const app = express();

app.set('view engine','ejs')



app.get('/edu',(req,res)=>{
    res.render('edu')
})
app.get('/agri',(req,res)=>{
    res.render('agri')
})
app.get('/health',(req,res)=>{
    res.render('health')
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/complain',(req,res)=>{
    res.render('complain')
})






mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
const db = mongoose.connection;
 
db.on("error", ()=>{
    console.log("error in connection");
})
db.once('open',()=>{
    console.log("connection success");
})
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/',homeRouter);
app.use("/complain",homeRouter);



app.listen(8080);

