import React, { Component } from 'react'
import { Box } from 'grommet'

import Grid from 'pixel-grid-react'
import './grid.css'

export default class CanvasContainer extends Component {
  
  generateGrid(pxNumber = 20) {
    const cells = []
    for (let i = 0; i < pxNumber * pxNumber; i++) {
      cells.push({
        width: 100 / pxNumber,
        color: '#ff0000',
        id: i
      })
    }
    return cells
  }

  render() {
    return (
      <Box border='all' pad='medium' height='medium' width='medium'>
        <Grid
          cells={this.generateGrid(50)}
          onCellEvent={e => { console.log(e) }}
        />
      </Box>
    )
  }
}
