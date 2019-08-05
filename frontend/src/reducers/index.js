import { combineReducers } from 'redux';

import {CanvasReducer} from './CanvasReducer'

const rootReducer = combineReducers({
  canvas: CanvasReducer,
});

export default rootReducer;
