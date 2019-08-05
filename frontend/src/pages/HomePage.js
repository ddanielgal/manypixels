import React from 'react'
import { Box } from 'grommet'

// import CanvasContainer from '../containers/CanvasContainer'
import ColorPickerContainer from '../containers/ColorPickerContainer'

const HomePage = () => {
  return (
    <Box fill align='center' justify='center'>
      <ColorPickerContainer />
    </Box>
  )
}

export default HomePage
