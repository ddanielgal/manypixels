import { GET_CANVAS, CHANGE_PIXEL_COLOR } from './types'
import axios from './session'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
} 

export const getCanvas = () => async (dispatch) => {
  try {
    let canvas = await axios.get('/api/v1/canvas/10/');
    const { size_x, size_y, name, content } = canvas.data;
    dispatch({
      type: GET_CANVAS,
      payload: { size_x, size_y, name, content },
    });
  } catch (e) {
    console.log(e);
  }
}

export const changePixelColor = (x, y) => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_PIXEL_COLOR,
    payload: { x, y, newColorChar: getKeyByValue(getState().color.colorMap, getState().color.selectedColor) },
  });
}
