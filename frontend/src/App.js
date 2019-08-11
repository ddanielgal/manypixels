import React, { Component } from 'react'
import { Grommet } from 'grommet'

import PageLayout from './layout/PageLayout'
import Main from './Main'


class App extends Component {
  render() {
    return (
      <Grommet full>
        <PageLayout>
          <Main />
        </PageLayout>
      </Grommet>
    );
  }
}

export default App;
