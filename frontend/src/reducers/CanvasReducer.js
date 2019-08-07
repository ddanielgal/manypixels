import { GET_CANVAS, CHANGE_PIXEL_COLOR } from '../actions/types'

const INITIAL = {};

export const CanvasReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case GET_CANVAS:
      return { ...state, ...action.payload };
    case CHANGE_PIXEL_COLOR:
      const index = state.size_x * action.payload.y + action.payload.x;
      const newContent = state.content.substr(0, index) + action.payload.newColorChar + state.content.substr(index + 1);
      return { ...state, content: newContent };
    default:
      return state;
  }
}
