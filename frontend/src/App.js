import React, { Component } from 'react'
import { Grommet } from 'grommet'

import Main from './Main'


class App extends Component {
  render() {
    return (
      <Grommet full>
        <Main />
      </Grommet>
    );
  }
}

export default App;
