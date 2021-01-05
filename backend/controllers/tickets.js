/**    
  
    CONTROLLER METHODS: creating functions/methods needed/associated for each route

      Ticket Controller: export each method so we can bring it in to the routes/tickets file

*/

console.log('accessing /controllers/tickets.js file'.file)

export const getTickets = (req, res, next) => {
  console.log('hello'.start)
  // @desc    Get all tickets
  // @route   GET /tickets
  // @access  Private
  res.status(200).json({ success: true, msg: 'Show all tickets' })

}

export const getTicket = (req, res, next) => {

  // @desc    Get single ticket
  // @route   GET /tickets/:id
  // @access  Private
  res.status(200).json({ success: true, msg: `Show single ticket ${req.params.id}` })

}


export const createTicket = (req, res, next) => {

  // @desc    Create new ticket
  // @route   POST /tickets
  // @access  Private
  res.status(200).json({ success: true, msg: 'Create new ticket' })

}


export const updateTicket = (req, res, next) => {

  // @desc    Update ticket
  // @route   Put /tickets/:id
  // @access  Private
  res.status(200).json({ success: true, msg: `Update ticket ${req.params.id}` })

}


export const deleteTicket = (req, res, next) => {

  // @desc    Delete ticket
  // @route   Delete /tickets/:id
  // @access  Private
  res.status(200).json({ success: true, msg: `Delete ticket ${req.params.id}` })

}

