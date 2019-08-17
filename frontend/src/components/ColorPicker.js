import React from 'react'
import { Box, Button, Grid, Text } from 'grommet'

const ColorPicker = (props) => {
  return (
    <Box direction='column' align='center' pad='small' gap='small' fill='horizontal'>
      <Box
        background={props.selectedColor}
        round='medium'
        border={{ size: 'xsmall' }}
        pad='xsmall'
        fill='horizontal'
        direction='row' justify='center'>
        <Text size='small'>{props.selectedColor}</Text>
      </Box>
      <Grid
        fill='horizontal'
        columns={{ count: 8, size: 'auto' }}>
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
