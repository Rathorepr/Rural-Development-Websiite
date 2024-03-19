const express = require("express");
const homeSchema = require("../models/homeSchema");
const home1Schema = require("../models/home1Schema");
const Router = express.Router();
Router.get('/',(err,res)=>{
    res.render("index",{title : 'Fill Form',password:'',email:''})
})

Router.get('/register',(err,res)=>{
    res.render("register")
})


Router.post('/register',async (req,res)=>{
     try{
          const{
              name,
              number,
              email,
              password,
              cpassword

          }= req.body;
    
        if( password === cpassword & password.length>3 & number.length===10 ){
           
            console.log(name)
            const  userData = new homeSchema({
                name,
              number,
              email,
              password
            })
            console.log(name)
            userData.save(err=>{
                if(err){
                    res.render("register")
                }
                if(password.length<4){
                    res.render("register")
                }
                if(number.length!=10){
                    res.render("register")
                }
                
                else{
                    res.render('index')
                }

            })

        }
       
        else{
            res.render("register")
           
        }
     } catch(error){
        res.render("register")
     }
})
Router.post('/login',(req,res)=>{
    const{
        email,
        password
    }= req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        if(email === result.email && password === result.password){
            res.render('index')
        }
        else{
            console.log(err)
        }
    })
})

Router.get('/complain',(err,res)=>{
    res.render("complain")
})

Router.post('/complain',async (req,res)=>{
     try{
          const{
              name,
              number,
              email,
              complainbox

          }= req.body;
        if( complainbox.length != 0){
            console.log(name)
            const  user2Data = new home1Schema({
                name,
              number,
              email,
              complainbox
            })
            console.log(name)
            user2Data.save(err=>{
                if(err){
                    res.render("complain")
                }
                else{
                    
                    res.render("complain")
                   
                }

            })

        }
       
        else{
            res.render("complain")  

        }
     } catch(error){
        res.render("complain")
     }
})


module.exports = Router;


module.exports = Router;
