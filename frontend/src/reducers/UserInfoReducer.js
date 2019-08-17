import { NEW_TICKET, CHANGE_PIXEL_COLOR } from '../actions/types'

const INITIAL = {
  name: '',
  pixelsRemaining: 0
};

export const UserInfoReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case NEW_TICKET:
      const { name, tickets } = action.payload
      return { name, pixelsRemaining: 10 * tickets };
    case CHANGE_PIXEL_COLOR:
      return { ...state, pixelsRemaining: state.pixelsRemaining - 1 }
    default:
      return state;
  }
}
