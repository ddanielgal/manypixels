import React from 'react'
import { Box, Button } from 'grommet'

const Canvas = (props) => {
  const biggerSide = props.grid.length > props.grid[0].length ? props.grid.length : props.grid[0].length;
  const pixelSize = `${70/biggerSide}vmin`;
  console.log(pixelSize);
  return (
    <Box border='all' pad='medium' direction='column'
      align='center' justify='center' overflow='auto'>
      {props.grid.map((row, y) => (
        <Box key={y} direction='row'>
          {row.map((pixel, x) => (
            <Button plain
              key={x}
              label={
                <Box
                  background={pixel}
                  border={{ size: 'xsmall' }}
                  width={pixelSize}
                  height={pixelSize} />
              }
              onClick={() => props.handlePixelClick(x, y)} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Canvas
