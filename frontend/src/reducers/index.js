import { combineReducers } from 'redux';

import { CanvasReducer } from './CanvasReducer'
import { ColorReducer } from './ColorReducer';

const rootReducer = combineReducers({
  canvas: CanvasReducer,
  color: ColorReducer
});

export default rootReducer;
