import React from 'react'
import { Box } from 'grommet'

import UserInfoContainer from '../containers/UserInfoContainer'
import ColorPickerContainer from '../containers/ColorPickerContainer'
import PixelRequestContainer from '../containers/PixelRequestContainer';


const Sidebar = () => {
  return (
    <Box
      direction='column'
      align='center'
      pad='small'
      gap='small'
      justify='between'
      width='small' >
      <ColorPickerContainer />
      <UserInfoContainer />
      <PixelRequestContainer />
    </Box>
  )
}

export default Sidebar
