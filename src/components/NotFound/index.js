import {
  ResponsiveContainer,
  BodyContainer,
  DesktopViewSlideBar,
  NotFoundContainer,
  NotFoundImg,
  NotFoundH1,
  NotFoundP1,
} from './styledComponents'

import SlideBar from '../slideBar'

import NxtWatchContext from '../../context/NxtWatchContext'
import Headers from '../headers'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <ResponsiveContainer>
          <Headers />
          <BodyContainer>
            <DesktopViewSlideBar>
              <SlideBar />
            </DesktopViewSlideBar>
            <NotFoundContainer isDark={isDark}>
              <NotFoundImg src={notFoundUrl} alt="not found" />
              <NotFoundH1 isDark={isDark}>Page Not Found</NotFoundH1>
              <NotFoundP1 isDark={isDark}>
                We are sorry, the page you requested could not be found.
              </NotFoundP1>
            </NotFoundContainer>
          </BodyContainer>
        </ResponsiveContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
