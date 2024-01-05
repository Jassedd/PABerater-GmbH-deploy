
import { decodeToken } from "../utils/Jwt";
import { Admin } from "../model/admin";

export const verifyToken = async (req,res,next) => {
    try {
        let token = req.cookies.token || req.headers.authorization;
        
        
        if (!token){
            return res.status(403).json ({message:"invalid token"})

        }
        const decodedToken = decodeToken(token)
        console.log(decodedToken)

        req.userId = decodedToken;

        const user = await Admin.findByPk (req.userId);
        if (!user){
            return res.status(404).json ({message:"user not found"})
        }
        next();
    } catch (error) {
        return res.status(404).json ({message:error})
    }
}


export const isAdmin = async (req, res, next) => {
    try {
        let token = req.cookies.token || req.headers.authorization;

        const decodedToken = decodeToken(token);

        console.log(decodedToken);

        req.userId = decodedToken;

        const user = await user.findByPk(req.userId);
        

        if ( user.id === req.userId && user.Role === "admin") {
            next();
        } else {
            res.status(403).json({ error: 'Acceso denegado' });
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
