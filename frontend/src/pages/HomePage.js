import React from 'react'
import { Grid } from 'grommet'

import CanvasContainer from '../containers/CanvasContainer'
import Sidebar from '../layout/Sidebar';

const HomePage = () => {
  return (
    <Grid full columns={['flex', 'auto']}>
      <CanvasContainer />
      <Sidebar />
    </Grid>
  )
}

export default HomePage
