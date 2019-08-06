import React from 'react'
import { Box, Button } from 'grommet'

const ColorPicker = (props) => {
  return (
    <Box direction='column' align='center' pad='medium' gap='medium' width='small'>
      <Box
        background={props.selectedColor}
        style={{ width: '4em', height: '4em' }}
        round='large'
        border={{ color: 'black', size: 'xsmall' }} />
      <Box direction='row' wrap={true}>
        {props.colors.map((color, i) => (
          <Button plain key={i}
            style={{ margin: '.1em' }}
            label={
              <Box
                background={color}
                style={{ width: '1em', height: '1em' }}
                border={{ color: 'black', size: 'xsmall' }}
              />
            }
            onClick={() => props.handleChange(color)}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ColorPicker
