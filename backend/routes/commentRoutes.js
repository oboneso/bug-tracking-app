/** @format */

import express from 'express';
import { createComment } from '../controllers/commentController.js';
// import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:id').put(createComment);

export default router;
