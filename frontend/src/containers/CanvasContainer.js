import React, { Component } from 'react'
import { Box, Button } from 'grommet'
import { connect } from 'react-redux'

import { getCanvas } from '../actions';


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
    if (!this.props.canvas.name) return <Box border='all' pad='medium'>Loading...</Box>;
    const grid = this.chunkArrayInGroups(this.props.canvas.content, this.props.canvas.size_x);
    return (
      <Box border='all' pad='medium' direction='column' gap='xxsmall'>
        {grid.map((row, y) => (
          <Box key={y} direction='row' gap='xxsmall'>
            {row.map((pixel, x) => (
              <Button plain
                key={x}
                label={<Box background={pixel} style={{ width: '2em', height: '2em' }} />}
                onClick={() => this.handlePixelClick(x, y)} />
            ))}
          </Box>
        ))}
      </Box>
    )
  }
}


const mapStateToProps = state => {
  return {
    canvas: state.canvas,
  };
};

export default connect(mapStateToProps, { getCanvas })(CanvasContainer);
