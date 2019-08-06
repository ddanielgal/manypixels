import React from 'react'
import { Box, Button, Grid } from 'grommet'

const Canvas = (props) => {
  const pixelSize = '1em';
  return (
    <Box align='center' justify='center' fill>
      <Box style={{ width: '70vw', height: '70vh' }}>
        <Grid fill
          columns={{ count: props.x, size: 'auto' }}>
          {props.grid.map((color, index) => {
            const y = Math.floor(index / props.x);
            const x = index - y * props.x;
            return (
              <Button plain fill
                key={index}
                label={
                  <Box
                    background={color}
                    border={{ size: 'xsmall' }}
                    fill
                    pad={{ top: '100%' }}
                  />}
                onClick={() => props.handlePixelClick(x, y)} />
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Canvas
