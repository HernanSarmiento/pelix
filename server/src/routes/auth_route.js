import express from 'express';
import { signup,signin } from '../controllers/auth_controller.js';

const router = express.Router();


router.post("/register",signup);
router.post("/signin",signin);

export default router;

