import React from 'react'
import tickets from '../tickets'
import Ticket from '../components/Ticket/Ticket'


const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} />
      ))}
    </div>
  )
}

export default HomePage
