import express from "express";

import { signUp, logIn, decodeToken, updateProfile, getProfile} from '../controllers/user-controller.js';
import { validateToken } from '../middlewares/user-middleware.js';
const router = express.Router();

router.post('/signup', signUp);
router.post('/logIn', logIn);
router.post('/testprofile', decodeToken);

router.get('/profile/:id', validateToken, getProfile);

router.patch('/profile/:id', validateToken, updateProfile);

export default router;