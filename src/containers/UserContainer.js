import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { handleLogin, checkLogin } from '../actions/UserActions'
import { getPhotos } from '../actions/PageActions'
import { getCurrentYear } from '../utils/date'

class UserContainer extends React.Component {
  handleLogin = () => {
    const { handleLogin, getPhotos } = this.props
    const successCallback = () => {
      const year = getCurrentYear()
      getPhotos(year)
    }
    handleLogin(successCallback)
  }

  checkLogin = () => {
    const { checkLogin } = this.props
    checkLogin()
  }

  render() {
    const { user } = this.props
    return (
      <User
        name={user.name}
        error={user.error}
        isFetching={user.isFetching}
        isLogged={this.checkLogin}
        handleLogin={this.handleLogin}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: successCallback => dispatch(handleLogin(successCallback)),
    getPhotos: year => dispatch(getPhotos(year)),
    checkLogin: () => dispatch(checkLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
