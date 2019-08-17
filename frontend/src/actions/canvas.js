import { GET_CANVAS, CHANGE_PIXEL_COLOR, FINISHED_PAINTING } from './types'
import axios from './session'

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export const getCanvas = () => async (dispatch) => {
  try {
    let canvas = await axios.get('/api/v1/canvas/11/')
    const { size_x, size_y, name, content } = canvas.data
    dispatch({
      type: GET_CANVAS,
      payload: { size_x, size_y, name, content },
    })
  } catch (e) {
    console.log(e)
  }
}

export const changePixelColor = (x, y) => async (dispatch, getState) => {
  if (getState().userInfo.pixelsRemaining === 0) return
  const newColorChar = getKeyByValue(getState().color.colorMap, getState().color.selectedColor)
  const userName = getState().userInfo.name
  dispatch({
    type: CHANGE_PIXEL_COLOR,
    payload: { x, y, newColorChar },
  })
  axios.put('/api/v1/canvas/11/', { x, y, color: newColorChar, name: userName })
    .catch(error => console.log(error))
}

export const finishedPainting = () => (
  { type: FINISHED_PAINTING }
)
