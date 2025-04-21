const express = require('express');
const app = express();

// Handling the request

app.use("/user", (req, res)=>{
    res.send("Order Matters ...");
})
app.get("/user",(req,res)=>{
    res.send({FirstName: "Umesh", LastName: "Mehta"});
});

app.post("/user", (req,res)=>{
    res.send("Saved Successfully");
});

app.put("/user", (req,res)=>{
    res.send("Modified Successfully.");
});

app.delete("/user", (req,res)=>{
    res.send("Deleted Successfully");
});

app.patch("/user", (req,res)=>{
    res.send("Patched Successfully");
});



app.listen('7777',()=>{
    console.log('Server is running on http://localhost:7777');
});
