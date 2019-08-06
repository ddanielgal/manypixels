import React from 'react'
import { Box, Button, Grid } from 'grommet'

const ColorPicker = (props) => {
  return (
    <Box direction='column' align='center' pad='medium' gap='medium' width='small'>
      <Box
        background={props.selectedColor}
        style={{ width: '4em', height: '4em' }}
        round='full'
        border={{ size: 'xsmall' }} />
      <Grid
        fill='horizontal'
        columns={{ count: 4, size: 'auto' }}>
        {Object.keys(props.colors).map((colorKey) => (
          <Button plain key={colorKey}
            label={
              <Box fill
                background={props.colors[colorKey]}
                border={{ size: 'xsmall' }}
                pad={{ top: '100%' }}
              />
            }
            onClick={() => props.handleChange(props.colors[colorKey])}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default ColorPicker
