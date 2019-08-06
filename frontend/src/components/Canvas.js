import React from 'react'
import { Box, Button, Grid } from 'grommet'

const Canvas = (props) => {
  return (
    <Grid fill
      columns={{ count: props.x, size: 'auto' }}
      rows={{ count: props.y, size: 'auto' }}>
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
              />}
            onClick={() => props.handlePixelClick(x, y)} />
        )
      })}
    </Grid>
  )
}

export default Canvas
