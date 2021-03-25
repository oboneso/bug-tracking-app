/** @format */

import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc Authorize user and get token
// @route POST /login
// @route /login
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) {
		res.status(401);
		throw new Error('email not found');
	} else {
		console.log('Email found');
	}

	if (user && (await user.matchPassword(password))) {
		console.log('Password correct');
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			username: user.username,
			idAdmin: user.isAdmin,
			loggedIn: true,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid password');
	}
});

const registerUser = asyncHandler(async (req, res, next) => {
	const { name, username, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(401);
		throw new Error('User already exists');
	}

	const user = await User.create({ name, username, email, password });

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email,
			idAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('invalid user');
	}
});

// @desc    Show user profile
// @route   GET /api/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res, next) => {
	console.log(
		`Searching for user profile with req.params.id: ${req.params.id}`,
	);
	const user = await User.findById(req.params.id);

	if (user) {
		console.log(`user ${user._id} found, sending profile data to client`);
		res.json({
			_id: user._id,
			username: user.username,
			name: user.name,
			email: user.email,
			role: user.role,
			bio: user.bio,
			avatar: user.avatar,
			joined: user.createdAt,
		});
	} else {
		console.log(`user: ${user._id} not found`);
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	console.log(`searching database for user: ${req.user._id}`);
	const user = await User.findById(req.user._id);

	if (user) {
		console.log('Updating user data...');
		console.log(`req body ${JSON.stringify(req.body)}`);
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.username = req.body.username || user.username;
		user.bio = req.body.bio || user.bio;
		user.role = req.body.role || user.role;
		user.avatar = req.body.avatar || user.avatar;

		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		console.log(`update complete, sending data to client`);
		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser._id),
		});
	} else {
		console.log(`user: ${user._id} not found`);

		res.status(404);
		throw new Error('User not found');
	}
});

// @desc    Get userList
// @route   GET /api/users
// @access  Private
const userList = asyncHandler(async (req, res, next) => {
	const users = await User.find({});

	if (!users) {
		console.log('no users found');
		res.status(404);
		throw new Error('Users not found');
	} else {
		res.json(users);
	}
});

export { userList, getUserProfile, registerUser, authUser, updateUserProfile };
