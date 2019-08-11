import { SELECT_COLOR } from '../actions/types'

var colorMap = {};
var keys = [];
for (var i = 0; i <= 31; i++) {
  keys.push(i.toString(32));
}
const colors = [
  '#000000', '#424242', '#7f7e7f', '#bebebe',
  '#ffffff', '#ff9c7c', '#ff0000', '#9d1636',
  '#43142b', '#8c3a21', '#c96e19', '#efb300',
  '#ffff00', '#04be00', '#0c7a42', '#113939',
  '#0000ff', '#3776ff', '#37bbff', '#04ffff',
  '#ffb5ec', '#ff00ff', '#a018cf', '#4e1f7f',
  '#131225', '#38466c', '#32421b', '#5e5e39',
  '#a9e0a6', '#f4d1c3', '#4f3835', '#1d1918'
];
keys.forEach((key, i) => colorMap[key] = colors[i]);


const INITIAL = {
  selectedColor: '#0000ff',
  colorMap: colorMap
};

export const ColorReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, selectedColor: action.payload.newColor };
    default:
      return state;
  }
}
