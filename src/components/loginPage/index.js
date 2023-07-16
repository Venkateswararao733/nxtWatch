import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginFormContainer,
  LoginLogo,
  LabelE1,
  InputE1,
  CheckBoxContainer,
  CheckboxInputE1,
  CheckboxLabelE1,
  LoginBtn,
  ErrorMsg,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isChangeCheckBox: false,
    isError: false,
    errorMsg: 'error',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureSubmit = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onSubmitLoginForm = event => {
    event.preventDefault()
    this.getLoginDetails()
  }

  getLoginDetails = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const LoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginUrl, options)
    const jsonData = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(jsonData.jwt_token)
    } else {
      this.onFailureSubmit(jsonData.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBox = () => {
    const {isChangeCheckBox} = this.state
    this.setState({isChangeCheckBox: !isChangeCheckBox})
  }

  render() {
    const {username, password, isError, errorMsg, isChangeCheckBox} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const LoginSrc = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer isDark={isDark}>
              <LoginFormContainer
                isDark={isDark}
                onSubmit={this.onSubmitLoginForm}
              >
                <LoginLogo src={LoginSrc} alt="website logo" />
                <LabelE1 htmlFor="username" isDark={isDark}>
                  USERNAME
                </LabelE1>
                <InputE1
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.onChangeUserInput}
                  isDark={isDark}
                />
                <LabelE1 htmlFor="password" isDark={isDark}>
                  PASSWORD
                </LabelE1>
                <InputE1
                  id="password"
                  type={isChangeCheckBox ? 'text' : 'password'}
                  value={password}
                  onChange={this.onChangeUserPassword}
                  isDark={isDark}
                />
                <CheckBoxContainer>
                  <CheckboxInputE1
                    type="checkBox"
                    onChange={this.onChangeCheckBox}
                    id="checkBox"
                    isDark={isDark}
                  />
                  <CheckboxLabelE1 htmlFor="checkBox" isDark={isDark}>
                    Show Password
                  </CheckboxLabelE1>
                </CheckBoxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {isError && <ErrorMsg isDark={isDark}>{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginPage
