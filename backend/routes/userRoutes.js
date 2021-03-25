/** @format */

import express from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

console.log('accessing /backend/routes/userRoutes.js: @route: /api/login');
console.log(
	'backend/routes/userRoutes.js is calling authUser function from /backend/controllers/userController.js ',
);

router.route('/').post(authUser);

export default router;
