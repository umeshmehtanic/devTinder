const express = require('express');
const app = express();
const {adminAuth,userAuth} = require('./middleware/auth');

app.use('/admin', adminAuth);

app.get('/admin/getAllData',(req,res)=>{
    console.log("all Admin data");
    res.send("All admin data returned");
})

app.get("/user",userAuth, (req, res,next)=>{
    next();
    //res.send("First Response");
},
[(req, res,next)=>{
    //res.send("second response");
    next();
},
(req, res,next)=>{
    //res.send("Third response");
    next();
}],
(req, res,next)=>{
    res.send("Fourth response");
},
(req, res,next)=>{
    res.send("Fifth response");
});

app.listen('7777',()=>{
    console.log('Server is running on http://localhost:7777');
});
