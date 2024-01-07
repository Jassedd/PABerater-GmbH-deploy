import { Admin } from "../model/admin.js";

import { createToken } from "../utils/Jwt.js";
import { comparePassword } from "../utils/Bcrypt.js";


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Admin.findOne({ where: { email } });

        if (!user) {
        return res.status(403).send('Invalid Email or Password');
    }
    const match = await comparePassword(password, user.password);
        
        if (!match) {
        return res.status(401).json({ message: "Invalid Password" });
        }

    const token = createToken(user.id);
        
    res.cookie('token', token, { httpOnly: true ,  expires: new Date(Date.now() + 60 * 60 * 1000)});

    return res.status(200).json(token);
    
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}