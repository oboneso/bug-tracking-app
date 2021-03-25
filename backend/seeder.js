import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import tickets from './data/tickets.js';
import Ticket from './models/ticketModel.js';
import User from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await User.deleteMany();
		await Ticket.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleTickets = tickets.map((ticket) => {
			return { ...ticket, submittedBy: adminUser };
		});

		await Ticket.insertMany(sampleTickets);
		console.log('data imported'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`error: ${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await User.deleteMany();
		await Ticket.deleteMany();

		console.log('data destroyed'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`error: ${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
