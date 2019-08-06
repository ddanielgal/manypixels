import { SELECT_COLOR } from '../actions/types'

const INITIAL = {
  selectedColor: 'blue',
  colorMap: {
    ...[
      'white', 'yellow', 'orange', 'red', 'magenta', 'purple', 'blue', 'cyan',
      'green', 'darkgreen', 'brown', 'tan', 'lightgrey', 'darkgrey', 'grey', 'black'
    ]
  }
};

export const ColorReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, selectedColor: action.payload.newColor };
    default:
      return state;
  }
}
