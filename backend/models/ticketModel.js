import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		comment: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const ticketSchema = mongoose.Schema(
	{
		ticketType: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		priority: {
			type: String,
			required: true,
		},
		assignedTo: {
			type: String,
			ref: 'User', // ref: means 'reference' and will create a relationship from the 'User' document
		},
		submittedBy: {
			type: mongoose.Schema.Types.ObjectId,
			// required: true,
			ref: 'User', // ref: means 'reference' and will create a relationship from the 'User' document
		},
		project: {
			type: String,
			ref: 'Project',
			required: true,
		},
		updatedBy: {
			type: mongoose.Schema.Types.ObjectId,
			// required: true,
			ref: 'User', // ref: means 'reference' and will create a relationship from the 'User' document
		},
		comments: [commentSchema],
	},
	{
		timestamps: true, // mongoose allows a second argument of options, 'timestamps' auto populates fields: 'created at' & 'updated at'
	},
);

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
