import React, { Component } from 'react'
import { Box } from 'grommet'

import Canvas from '../components/Canvas'

export default class CanvasContainer extends Component {
  render() {
    return (
      <Box border='all' pad='medium'>
        <Canvas />
      </Box>
    )
  }
}
