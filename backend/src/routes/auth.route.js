import exprsss from 'express'
import { signup,login,logout,updateProfile } from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.middleware.js';

const router =exprsss.Router();

router.post('/signup',signup)

router.post("/login",login)

router.post("/logout",logout)

router.put('/update-profile',auth,updateProfile)

router.get("/check",auth, (req,res)=> res.status(200).json(req.user));

export default router;