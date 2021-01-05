import axios from 'axios'
import { TICKET_LIST_FAIL, TICKET_LIST_SUCCESS, TICKET_LIST_REQUEST } from './types'

export const listTickets = () => async (dispatch) => {
  console.log('listTickets action creator started')
  try {
    console.log('trying dispatch type: TICKET_LIST_REQUEST')
    dispatch({type: TICKET_LIST_REQUEST})
    
    console.log('sending request to /tickets')
    const response = await axios.get('/tickets')
    
    console.log(`response: ${response}`)

    dispatch({
      type: TICKET_LIST_SUCCESS,
      payload: response.data
    }) 

  } catch (error) {
    console.log('catch state running with error')
    console.log(`error: ${error}`)
    dispatch({
      type: TICKET_LIST_FAIL,
      payload: error.message && error.response.data.message ? error.response.data.message : error.message
    })
  }
}