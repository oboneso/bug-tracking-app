import tickets from '../apis/tickets'

export const createTicket = (formValues) => async (dispatch) => {
  const response = await tickets.post('/tickets', { formValues })

  dispatch({
    type: CREATE_TICKET,
    payload: response.data
  })

  history.push('/dashboard')
}