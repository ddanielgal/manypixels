import { SELECT_COLOR } from '../actions/types'

const INITIAL = {
  selectedColor: '#0000ff',
  colors: ['#0000ff', '#00ff00', '#ff0000', '#000000', '#ffffff', '#ffff00']
};

export const ColorPickerReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, selectedColor: action.payload.newColor };
    default:
      return state;
  }
}
