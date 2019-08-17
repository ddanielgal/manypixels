import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changePixelColor } from '../actions/canvas'
import Pixel from '../components/Pixel'


class PixelContainer extends Component {

  handleClick(x, y) {
    this.props.changePixelColor(x, y);
  }

  render() {
    const color = this.props.colorMap[this.props.colorChar];
    return (
      <Pixel
        color={color}
        handleClick={() => this.handleClick(this.props.x, this.props.y)}
        size={this.props.size} />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const { x, y } = ownProps;
  return {
    colorChar: state.canvas.content.charAt(state.canvas.size_x * y + x),
    size: state.canvas.size_y,
    colorMap: state.color.colorMap
  };
};

export default connect(mapStateToProps, { changePixelColor })(PixelContainer);
