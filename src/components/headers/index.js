import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {VscThreeBars} from 'react-icons/vsc'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import {
  NavContainer,
  WebsiteLogo,
  LinkItem,
  MobileViewContainer,
  ListItems,
  IconsBtn,
  IconsImg,
  DesktopViewContainer,
  LogOutDesktopBtn,
  PopUpContainer,
  PopupThreeLinesContainer,
  MobileSlideBar,
  PopUpMobileBtn,
  PopUpCardContainer,
  PopUpDescription,
  PopUpBtnContainer,
  PopUpBtn,
} from './styledComponents'

import SlideBar from '../slideBar'

import NxtWatchContext from '../../context/NxtWatchContext'

class Headers extends Component {
  onClickConfirmBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, onClickThemeBtn} = value
          const onClickTheme = () => {
            onClickThemeBtn()
          }
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const bgColorImgIcon = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          return (
            <NavContainer isDark={isDark}>
              <LinkItem to="/">
                <WebsiteLogo src={websiteLogo} alt="website logo" />
              </LinkItem>

              <MobileViewContainer>
                <ListItems>
                  <IconsBtn
                    data-testid="theme"
                    onClick={onClickTheme}
                    isDark={isDark}
                  >
                    <IconsImg src={bgColorImgIcon} alt="theme" />
                  </IconsBtn>
                </ListItems>
                <ListItems>
                  <PopUpContainer>
                    <Popup
                      modal
                      trigger={
                        <IconsBtn isDark={isDark} type="button">
                          <VscThreeBars size={30} />
                        </IconsBtn>
                      }
                    >
                      {close => (
                        <PopupThreeLinesContainer isDark={isDark}>
                          <PopUpMobileBtn type="button" onClick={() => close()}>
                            <AiOutlineClose size={40} />
                          </PopUpMobileBtn>
                          <MobileSlideBar>
                            <SlideBar />
                          </MobileSlideBar>
                        </PopupThreeLinesContainer>
                      )}
                    </Popup>
                  </PopUpContainer>
                </ListItems>
                <ListItems>
                  <PopUpContainer>
                    <Popup
                      modal
                      trigger={
                        <IconsBtn isDark={isDark}>
                          <FiLogOut size={30} />
                        </IconsBtn>
                      }
                    >
                      {close => (
                        <PopUpCardContainer isDark={isDark}>
                          <PopUpDescription isDark={isDark}>
                            Are you sure, you want to logout
                          </PopUpDescription>
                          <PopUpBtnContainer>
                            <PopUpBtn
                              type="button"
                              isDark={isDark}
                              onClick={() => close()}
                            >
                              Cancel
                            </PopUpBtn>
                            <PopUpBtn
                              type="button"
                              text="confirm"
                              onClick={this.onClickConfirmBtn}
                            >
                              Confirm
                            </PopUpBtn>
                          </PopUpBtnContainer>
                        </PopUpCardContainer>
                      )}
                    </Popup>
                  </PopUpContainer>
                </ListItems>
              </MobileViewContainer>

              <DesktopViewContainer>
                <ListItems>
                  <IconsBtn
                    data-testid="theme"
                    onClick={onClickTheme}
                    isDark={isDark}
                  >
                    <IconsImg src={bgColorImgIcon} alt="theme" />
                  </IconsBtn>
                </ListItems>
                <ListItems>
                  <IconsImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ListItems>
                <ListItems>
                  <PopUpContainer>
                    <Popup
                      modal
                      trigger={
                        <LogOutDesktopBtn
                          data-testid="log out"
                          isDark={isDark}
                          type="button"
                        >
                          Logout
                        </LogOutDesktopBtn>
                      }
                    >
                      {close => (
                        <PopUpCardContainer isDark={isDark}>
                          <PopUpDescription isDark={isDark}>
                            Are you sure you want to logout?
                          </PopUpDescription>
                          <PopUpBtnContainer>
                            <PopUpBtn
                              type="button"
                              isDark={isDark}
                              onClick={() => close()}
                            >
                              Cancel
                            </PopUpBtn>
                            <PopUpBtn
                              type="button"
                              text="confirm"
                              onClick={this.onClickConfirmBtn}
                            >
                              Confirm
                            </PopUpBtn>
                          </PopUpBtnContainer>
                        </PopUpCardContainer>
                      )}
                    </Popup>
                  </PopUpContainer>
                </ListItems>
              </DesktopViewContainer>
            </NavContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Headers)
