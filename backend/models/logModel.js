/** @format */

import mongoose from 'mongoose';

const logSchema = mongoose.Schema(
	{
		user: {
			type: String,
		},
		logType: {
			type: String,
			required: true,
		},
		log: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // mongoose allows a second argument of options, 'timestamps' auto populates fields: 'created at' & 'updated at'
	},
);

const Log = mongoose.model('Log', logSchema);

export default Log;
