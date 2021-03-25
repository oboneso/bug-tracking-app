/** @format */
import asyncHandler from 'express-async-handler';
import Log from '../models/logModel.js';

// @desc    Create new log
// @route   POST /api/logs
// @access  Public
const newLog = asyncHandler(async (req, res, next) => {
	const { user, logType, log } = req.body;
	const verifyLog = await Log.create({ user, logType, log });
	res.status(200).json(verifyLog);
});

const getLogs = asyncHandler(async (req, res, next) => {
	const logs = await Log.find({});
	res.status(200).json(logs);
});

export { newLog, getLogs };
