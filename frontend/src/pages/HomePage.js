import React from 'react'
import { Grid } from 'grommet'

import CanvasContainer from '../containers/CanvasContainer'
import ColorPickerContainer from '../containers/ColorPickerContainer'

const HomePage = () => {
  return (
    <Grid full columns={['flex', 'auto']}>
      <CanvasContainer />
      <ColorPickerContainer />
    </Grid>
  )
}

export default HomePage
