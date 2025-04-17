const express = require('express');
const app = express();

// Handling the request
app.get("/",(req,res)=>{
    res.send("This is server");
});

app.get("/test",(req,res)=>{
    res.send("Test page");
});

app.get("/hello",(req,res)=>{
    res.send('Hello Page');
});


app.listen('7777',()=>{
    console.log('Server is running on http://localhost:7777');
});
