import express from "express";

import { signUp, logIn, decodeToken, updateProfile } from '../controllers/user-controller.js';
import { validateToken } from '../middlewares/user-middleware.js';
const router = express.Router();

router.post('/signup', signUp);
router.post('/logIn', logIn);
router.post('/testprofile', decodeToken);

router.patch('/updateprofile/:id', validateToken, updateProfile);

export default router;