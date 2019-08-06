import { GET_CANVAS, CHANGE_PIXEL_COLOR } from './types'
import axios from './session'


export const getCanvas = () => async (dispatch) => {
  try {
    let canvas = await axios.get('/api/v1/canvas/1/');
    const { size_x, size_y, name, content } = canvas.data;
    dispatch({
      type: GET_CANVAS,
      payload: { size_x, size_y, name, content },
    });
  } catch (e) {
    console.log(e);
  }
}

export const changePixelColor = (x, y, newColor) => async (dispatch) => {
  dispatch({
    type: CHANGE_PIXEL_COLOR,
    payload: { x, y, newColor },
  });
}
