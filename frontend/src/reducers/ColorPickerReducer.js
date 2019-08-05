import { SELECT_COLOR } from '../actions/types'

const INITIAL = '#0000ff';

export const ColorPickerReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return action.payload.newColor;
    default:
      return state;
  }
}
