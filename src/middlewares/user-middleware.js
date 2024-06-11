import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/serverConfig.js';


export const validateToken = async(req, res, next) => {
    const token = req.headers['x-access-token'];
    const response = jwt.verify(token, SECRET_KEY);
    if(!response) {
        throw {error: 'Invalid Token'}
    }
    const user = await jwt.decode(token);
    if(!user) {
        return res.status(401).json({
            message: 'Unauthorize access'
        })
    }
    req.user = user;
    next();
}
