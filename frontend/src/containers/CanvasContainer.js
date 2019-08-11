import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'

import { getCanvas } from '../actions';
import Loading from '../components/Loading'
import PixelContainer from './PixelContainer'


class CanvasContainer extends Component {

  componentDidMount() {
    this.props.getCanvas();
  }

  render() {
    if (!this.props.name) return <Loading />;
    let rows = [];
    for (let i = 0; i < this.props.y; ++i) {
      let pixels = [];
      for (let j = 0; j < this.props.x; ++j) {
        pixels.push(<PixelContainer x={j} y={i} key={j} />);
      }
      rows.push(
        <Box direction='row' key={i}>
          {pixels}
        </Box>
      );
    }
    return (
      <Box border='all' pad='medium' direction='column'
      align='center' justify='center' overflow='auto'>
        {rows}
      </Box>
    )
  }
}


const mapStateToProps = state => {
  return {
    x: state.canvas.size_x,
    y: state.canvas.size_y,
    name: state.canvas.name
  };
};

export default connect(mapStateToProps, { getCanvas })(CanvasContainer);
