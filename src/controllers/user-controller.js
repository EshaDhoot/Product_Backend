import UserService from "../services/user-service.js";
import jwt from 'jsonwebtoken';
const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const response = await userService.signUp(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: 'Successfully created a new user'
        });
    } catch (error) {
        if(error.reason === "DUPLICATE_EMAIL") {
            return res.status(500).json({
                message: 'User already exists',
                success: false
            });
        }
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'Not able to create a new user, something went wrong'
        });
    }
};

export const logIn = async(req, res) => {
    try {
        const token = await userService.signIn(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data : token,
            err: {}
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'Not able to logIn, Something went wrong'
        });
    }
}

export const decodeToken = async(req, res) => {
    try {
        const user = await jwt.decode(req.body.token);
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'Not able to decode Token, Something went wrong'
        });
    }
}


export const updateProfile = async(req, res) => {
    try {
        const response = await userService.updateProfile(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated your profile",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update your profile",
            err: error
        });
    }
}