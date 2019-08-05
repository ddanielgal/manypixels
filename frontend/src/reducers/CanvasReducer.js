import { GET_CANVAS } from '../actions/types'

const INITIAL = {};

export const CanvasReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case GET_CANVAS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
