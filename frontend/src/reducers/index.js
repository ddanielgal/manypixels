import { combineReducers } from 'redux';

import { CanvasReducer } from './CanvasReducer'
import { ColorPickerReducer } from './ColorPickerReducer';

const rootReducer = combineReducers({
  canvas: CanvasReducer,
  colorPicker: ColorPickerReducer
});

export default rootReducer;
