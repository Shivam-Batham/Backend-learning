require("dotenv").config()
const express = require("express");
const app = express();
const port =3000;

app.get("/",(req,res)=>{
    res.send("Hello Backend!")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please Login!</h1>")
})

app.get("/home",(req,res)=>{
    res.send("<h1>This is Home page</h1>")
})

app.get("/chai",(req,res)=>{
    res.send("<h2>Learning Backend from Chai aur Code </h2>")
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Backend Server Started! at ${process.env.PORT}`);
})