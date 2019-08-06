import { GET_CANVAS, CHANGE_PIXEL_COLOR } from '../actions/types'

const INITIAL = {};

export const CanvasReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case GET_CANVAS:
      return { ...state, ...action.payload };
    case CHANGE_PIXEL_COLOR:
      const index = state.size_x * action.payload.y + action.payload.x;
      return {
        ...state,
        content: [
          ...state.content.slice(0, index),
          action.payload.newColor,
          ...state.content.slice(index + 1)
        ]
      }
    default:
      return state;
  }
}
