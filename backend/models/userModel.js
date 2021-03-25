/** @format */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		googleId: {
			type: String,
		},
		name: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
			default: 'Developer',
		},
		avatar: {
			type: String,
			default:
				'https://png.pngtree.com/png-clipart/20210310/original/pngtree-graphic-default-avatar-png-image_5938131.jpg',
		},
		username: {
			type: String,
			unique: true,
		},
		loggedIn: {
			type: Boolean,
		},
		friends: {
			type: Array,
		},
		friendsPending: {
			type: Array,
		},
		bio: {
			type: String,
		},
	},
	{
		timestamps: true, // mongoose allows a second argument of options, 'timestamps' auto populates fields: 'created at' & 'updated at'
	},
);

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
