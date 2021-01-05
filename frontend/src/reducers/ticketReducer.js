import { TICKET_LIST_FAIL, TICKET_LIST_SUCCESS, TICKET_LIST_REQUEST } from '../actions/types'

export const ticketListReducer = (state = { tickets: [] }, action) => {
  switch (action.type) {
    case TICKET_LIST_REQUEST:
      return { loading: true, tickets: [] }
    case TICKET_LIST_SUCCESS:
      return { loading: false, tickets: action.payload }
    case TICKET_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

