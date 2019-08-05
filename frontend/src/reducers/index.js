import { combineReducers } from 'redux';

import { CanvasReducer } from './CanvasReducer'
import { ColorPickerReducer } from './ColorPickerReducer';

const rootReducer = combineReducers({
  canvas: CanvasReducer,
  selectedColor: ColorPickerReducer
});

export default rootReducer;
