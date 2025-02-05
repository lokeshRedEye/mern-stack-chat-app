import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'


export const protetRoute = async (req, res , next ) => {
    try {
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({message : "Unauthorized no token provided1" })
        }

        const decoded = jwt.verify(token , process.env.JWT_TOKEN)
        if(!decoded){
            return res.status(401).json({message : "Unauthorized Invalid Token" })

        }

        const user = await User.findById(decoded.userId).select("-password") 

        if (!user){
            return res.status(404).json({message : " user not found "});
        }

        req.user = user

        next()

        
    } catch (error) {
        console.log(`error in  the protecRouter function ` , error.message)
        return res.status(500).json({message : "interanl server error "})
        
    }

}