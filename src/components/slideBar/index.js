import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {GiGamepad} from 'react-icons/gi'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {
  SlideBarDesktopContainer,
  SlideItemsContainer,
  SlideItem,
  SlideName,
  SlideBottomContainer,
  ContactUsp1,
  FollowAppsContainer,
  FollowAppListItem,
  AppImage,
  SlideDescription,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const SlideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeMenu, changeActiveMenu} = value
      return (
        <SlideBarDesktopContainer isDark={isDark}>
          <SlideItemsContainer>
            <Link
              to="/"
              onClick={() => changeActiveMenu(activeMenuConstants.home)}
              style={{textDecoration: 'none', margin: 4}}
            >
              <SlideItem isActive={activeMenu === activeMenuConstants.home}>
                <AiFillHome
                  size={20}
                  color={
                    activeMenu === activeMenuConstants.home
                      ? '#ff0000'
                      : '#909090'
                  }
                />
                <SlideName isDark={isDark}>Home</SlideName>
              </SlideItem>
            </Link>
            <Link
              to="/trending"
              onClick={() => changeActiveMenu(activeMenuConstants.trending)}
              style={{textDecoration: 'none', margin: 4}}
            >
              <SlideItem isActive={activeMenu === activeMenuConstants.trending}>
                <FaFire
                  size={20}
                  color={
                    activeMenu === activeMenuConstants.trending
                      ? '#ff0000'
                      : '#909090'
                  }
                />
                <SlideName isDark={isDark}>Trending</SlideName>
              </SlideItem>
            </Link>
            <Link
              to="/gaming"
              onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
              style={{textDecoration: 'none', margin: 4}}
            >
              <SlideItem isActive={activeMenu === activeMenuConstants.gaming}>
                <GiGamepad
                  size={20}
                  color={
                    activeMenu === activeMenuConstants.gaming
                      ? '#ff0000'
                      : '#909090'
                  }
                />
                <SlideName isDark={isDark}>Gaming</SlideName>
              </SlideItem>
            </Link>
            <Link
              to="/saved-videos"
              onClick={() => changeActiveMenu(activeMenuConstants.savedVideos)}
              style={{textDecoration: 'none', margin: 4}}
            >
              <SlideItem
                isActive={activeMenu === activeMenuConstants.savedVideos}
              >
                <BiListPlus
                  size={24}
                  color={
                    activeMenu === activeMenuConstants.savedVideos
                      ? '#ff0000'
                      : '#909090'
                  }
                />
                <SlideName isDark={isDark}>Saved videos</SlideName>
              </SlideItem>
            </Link>
          </SlideItemsContainer>
          <SlideBottomContainer>
            <ContactUsp1 isDark={isDark}>CONTACT US</ContactUsp1>
            <FollowAppsContainer>
              <FollowAppListItem>
                <AppImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </FollowAppListItem>
              <FollowAppListItem>
                <AppImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </FollowAppListItem>
              <FollowAppListItem>
                <AppImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </FollowAppListItem>
            </FollowAppsContainer>
            <SlideDescription isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </SlideDescription>
          </SlideBottomContainer>
        </SlideBarDesktopContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SlideBar
