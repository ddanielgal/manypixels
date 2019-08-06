import React from 'react'
import { Box, Button } from 'grommet'

const ColorPicker = (props) => {
  return (
    <Box direction='column' align='center' gap='medium'>
      <Box
        background={props.selectedColor}
        style={{ width: '4em', height: '4em' }}
        round='large'
        border={{ color: 'black', size: 'xsmall' }} />
      <Box direction='row' wrap={true}>
        {props.colors.map((color, i) => (
          <Button plain key={i}
            style={{ margin: '.5em' }}
            label={
              <Box
                background={color}
                style={{ width: '4em', height: '4em' }}
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
