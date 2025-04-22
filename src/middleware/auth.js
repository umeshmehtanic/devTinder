const adminAuth =  (req,res,next)=>{
    const token = "xyz";
    const isAdmin = token==='xyz';
    if(isAdmin){
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
};

const userAuth =  (req,res,next)=>{
    const token = "xyz";
    const isAdmin = token==='xyz';
    if(isAdmin){
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
};

module.exports = {adminAuth,userAuth};