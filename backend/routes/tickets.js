import express from 'express'
import { 
  getTicket,
  getTickets,
  updateTicket,
  createTicket,
  deleteTicket 
} from '../controllers/tickets.js'

const router = express.Router()

router.route('/')
  .get(getTickets)
  .post(createTicket)

router.route('/:id')
  .get(getTicket)
  .put(updateTicket)
  .delete(deleteTicket)

export default router