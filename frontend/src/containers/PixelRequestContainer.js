import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newTicket } from '../actions/userinfo'
import PixelRequest from '../components/PixelRequest'


class PixelRequestContainer extends Component {
  render() {
    return (<PixelRequest
      displayButton={this.props.pixelsRemaining === 0}
      newTicket={this.props.newTicket} />)
  }
}

const mapStateToProps = (state) => ({
  pixelsRemaining: state.userInfo.pixelsRemaining
})

export default connect(mapStateToProps, { newTicket })(PixelRequestContainer)
