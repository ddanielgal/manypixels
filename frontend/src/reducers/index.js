import { combineReducers } from 'redux';

import { CanvasReducer } from './CanvasReducer'
import { ColorReducer } from './ColorReducer'
import { UserInfoReducer } from './UserInfoReducer'

const rootReducer = combineReducers({
  canvas: CanvasReducer,
  color: ColorReducer,
  userInfo: UserInfoReducer
})

export default rootReducer
