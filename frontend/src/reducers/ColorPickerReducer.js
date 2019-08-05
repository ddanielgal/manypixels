import { SELECT_COLOR } from '../actions/types'

const INITIAL = {};

export const ColorPickerReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, selectedColor: action.payload.newColor };
    default:
      return state;
  }
}
