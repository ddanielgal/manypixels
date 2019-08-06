import React from 'react'
import { Box, Button, Grid } from 'grommet'

const Canvas = (props) => {
  const pixelSize = '1em';
  return (
    <Box border='all' pad='medium' direction='column' gap='.1em'
      align='center' justify='center'>
      {props.grid.map((row, y) => (
        <Box key={y} direction='row' gap='.1em'>
          {row.map((pixel, x) => (
            <Button plain
              key={x}
              label={<Box background={pixel} style={{ width: '2em', height: '2em' }} />}
              onClick={() => props.handlePixelClick(x, y)} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Canvas
