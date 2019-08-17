import { NEW_TICKET } from './types'

export const newTicket = (name, tickets) => (
  { type: NEW_TICKET, payload: { name, tickets } }
)
