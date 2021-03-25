import express from 'express';
import {
	getTicketById,
	getTickets,
	updateTicket,
	createTicket,
	deleteTicket,
} from '../controllers/ticketController.js';

const router = express.Router();

router.route('/').get(getTickets).post(createTicket);

router.route('/:id').get(getTicketById).put(updateTicket).delete(deleteTicket);

export default router;
