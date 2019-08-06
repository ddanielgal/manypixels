import React from 'react'
import { Grid } from 'grommet'

import Header from '../components/Header'
import Footer from '../components/Footer'


const PageLayout = (props) => {
  return (
    <Grid fill rows={["auto", "flex", "auto"]}>
      <Header />
      {props.children}
      <Footer />
    </Grid>
  )
}

export default PageLayout
