import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCanvas } from '../actions';

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
    console.log(x, y);
  }

  render() {
    if (!this.props.canvas.name) return <Loading />;
    const grid = this.chunkArrayInGroups(this.props.canvas.content, this.props.canvas.size_x);
    return (
      <Canvas grid={grid} handlePixelClick={this.handlePixelClick} />
    )
  }
}


const mapStateToProps = state => {
  return {
    canvas: state.canvas,
  };
};

export default connect(mapStateToProps, { getCanvas })(CanvasContainer);
