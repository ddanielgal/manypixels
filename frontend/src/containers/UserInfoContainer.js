import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/UserInfo'
import { finishedPainting } from '../actions'

class UserInfoContainer extends Component {
  render() {
    return (
      <UserInfo
        name={this.props.name}
        pixelsRemaining={this.props.pixelsRemaining}
        color={this.props.selectedColor}
        finishedPainting={this.props.finishedPainting} />
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.userInfo.name,
  pixelsRemaining: state.userInfo.pixelsRemaining,
  selectedColor: state.color.selectedColor
})

export default connect(mapStateToProps, { finishedPainting })(UserInfoContainer)
