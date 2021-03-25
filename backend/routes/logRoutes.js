/** @format */

import express from 'express';
import { newLog, getLogs } from '../controllers/logController.js';

const router = express.Router();

router.route('/').post(newLog);
router.route('/').get(getLogs);

export default router;
