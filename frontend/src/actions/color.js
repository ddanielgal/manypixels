import { SELECT_COLOR } from './types'


export const selectColor = (newColor) => async (dispatch) => {
  dispatch({
    type: SELECT_COLOR,
    payload: { newColor },
  });
}
