import express from "express";

import { signUp, logIn } from '../controllers/user-controller.js';

const router = express.Router();

router.use('/signup', signUp);
router.use('/logIn', logIn);

export default router;