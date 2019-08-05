import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectColor } from '../actions/color'

import { Box, Button } from 'grommet'


class ColorPickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#0000ff', '#00ff00', '#ff0000', '#000000', '#ffffff']
    }
  }

  handleChange(color) {
    this.props.selectColor(color);
  }

  render() {
    return (
      <Box direction='column' align='center' gap='medium'>
        <Box
          background={this.props.selectedColor}
          style={{ width: '4em', height: '4em' }}
          round='large'
          border={{ color: 'black', size: 'xsmall' }} />
        <Box direction='row' wrap={true}>
          {this.state.colors.map((color, i) => (
            <Button plain key={i}
              style={{ margin: '.5em' }}
              label={
                <Box
                  background={color}
                  style={{ width: '4em', height: '4em' }}
                  border={{ color: 'black', size: 'xsmall' }}
                />
              }
              onClick={() => this.handleChange(color)}
            />
          ))}
        </Box>
      </Box>
    )
  }
}


const mapStateToProps = state => {
  return {
    selectedColor: state.selectedColor,
  };
};

export default connect(mapStateToProps, { selectColor })(ColorPickerContainer);
