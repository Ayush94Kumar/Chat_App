import exprsss from 'express'

const router =exprsss.Router();

router.get('/signup',(req,res)=>{
    res.send("Singup");
})

router.get("/login",(req,res)=>{
    res.send("Login");
})

router.get("/logout",(req,res)=>{
    res.send("Logout");
})

export default router;