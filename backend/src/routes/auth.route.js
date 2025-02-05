import express from 'express'
import { checkAuth, login, logout, signup, updateProfile } from '../controllers/auth.controller.js'
import { protetRoute } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post("/signup" , signup )

router.post("/login" , login)

router.post("/logout" , logout)

router.put("/update-profile" ,protetRoute,  updateProfile)

router.get("/check"  , protetRoute , checkAuth )


export default router