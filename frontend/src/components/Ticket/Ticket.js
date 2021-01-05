import React from 'react'
import { Link } from 'react-router-dom'


const Ticket = ({ ticket }) => {
  console.log(ticket)
  return (
    <div>
      <Link to={`/ticket/${ticket._id}`}>
        <h2>{ticket.title}</h2>
      </Link>
    </div>
  )
}

export default Ticket
