/** @format */

import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Jane Doe',
		email: 'janedoe@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Harvey Spector',
		email: 'harvey@spector.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
