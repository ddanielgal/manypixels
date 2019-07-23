import React, { Component } from 'react'
import { Button, Box } from 'grommet'


export default class Canvas extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  handleClick() {
    let context = this.canvasRef.current.getContext('2d')
    let id = context.getImageData(0,0,1,1);
    id.data[2] = 255;
    id.data[3] = 255;
    context.putImageData(id,10,10);
  }

  render() {
    return (
      <Box direction='column'>
        <canvas width='200' height='200' ref={this.canvasRef} />
        <Button label='Clicky boi' onClick={() => this.handleClick()} />
      </Box>
    )
  }
}
