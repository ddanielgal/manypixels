import React from 'react'
import { Box, Button } from 'grommet'

const Canvas = (props) => {
  return (
    <Box border='all' pad='medium' direction='column'
      align='center' justify='center'>
      {props.grid.map((row, y) => (
        <Box key={y} direction='row'>
          {row.map((pixel, x) => (
            <Button plain
              key={x}
              label={
                <Box
                  background={pixel}
                  style={{ width: '2em', height: '2em' }}
                  border={{ size: 'xsmall' }}
                />}
              onClick={() => props.handlePixelClick(x, y)} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Canvas
