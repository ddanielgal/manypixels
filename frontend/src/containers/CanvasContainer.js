import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCanvas, changePixelColor } from '../actions';

import Loading from '../components/Loading'
import Canvas from '../components/Canvas'


class CanvasContainer extends Component {

  componentDidMount() {
    this.props.getCanvas();
  }

  chunkArrayInGroups(arr, size) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  }

  handlePixelClick(x, y) {
    this.props.changePixelColor(x, y, this.props.selectedColor);
  }

  render() {
    if (!this.props.canvas.name) return <Loading />;
    const grid = this.chunkArrayInGroups(this.props.canvas.content, this.props.canvas.size_x);
    return (
      <Canvas
        grid={this.props.canvas.content}
        x={this.props.canvas.size_x}
        y={this.props.canvas.size_y}
        handlePixelClick={(x, y) => this.handlePixelClick(x, y)} />
    )
  }
}


const mapStateToProps = state => {
  return {
    canvas: state.canvas,
    selectedColor: state.colorPicker.selectedColor
  };
};

export default connect(mapStateToProps, { getCanvas, changePixelColor })(CanvasContainer);
