import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/UserInfo'


class UserInfoContainer extends Component {
  render() {
    return (
      <UserInfo
        name={this.props.name}
        pixelsRemaining={this.props.pixelsRemaining}
        color={this.props.selectedColor} />
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.userInfo.name,
  pixelsRemaining: state.userInfo.pixelsRemaining,
  selectedColor: state.color.selectedColor
})

export default connect(mapStateToProps, {})(UserInfoContainer)
