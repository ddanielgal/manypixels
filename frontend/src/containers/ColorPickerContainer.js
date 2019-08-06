import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectColor } from '../actions/color'
import ColorPicker from '../components/ColorPicker'

class ColorPickerContainer extends Component {

  handleChange(color) {
    this.props.selectColor(color);
  }

  render() {
    return (
      <ColorPicker
        colors={this.props.colors}
        selectedColor={this.props.selectedColor}
        handleChange={(color) => this.handleChange(color)} />
    )
  }
}


const mapStateToProps = state => {
  return {
    selectedColor: state.colorPicker.selectedColor,
    colors: state.colorPicker.colors
  };
};

export default connect(mapStateToProps, { selectColor })(ColorPickerContainer);
