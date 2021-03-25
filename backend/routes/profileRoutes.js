/** @format */

import express from 'express';
import {
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:id').get(protect, getUserProfile);
router.route('/').put(protect, updateUserProfile);

export default router;
