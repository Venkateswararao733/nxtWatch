import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import LoginPage from './components/loginPage'
import Home from './components/home'
import TrendingPage from './components/trending'
import GamingPage from './components/gamingPage'
import SavedVideosPage from './components/savedVideos'
import VideoDetailsPage from './components/videoDetailsPage'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/protectedRoute'

import './App.css'

const activeMenuConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
  videoItemDetails: 'VIDEO_ITEM_DETAILS',
}

class App extends Component {
  state = {
    activeMenu: activeMenuConstants.home,
    isDark: false,
    savedVideos: [],
    isLiked: false,
    isDisLiked: false,
  }

  onClickSaveBtn = video => {
    const {savedVideos, isLiked, isDisLiked} = this.state
    const isSavedAlready = savedVideos.filter(
      eachVideo => eachVideo.id === video.id,
    )
    if (isSavedAlready.length === 0) {
      this.setState({
        savedVideos: [
          ...savedVideos,
          {...video, isSaved: true, isLiked, isDisLiked},
        ],
      })
    } else {
      const newArray = savedVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({savedVideos: [...newArray]})
    }
  }

  onCLickLikeBtn = video => {
    const {savedVideos} = this.state
    const filteredArray = savedVideos.filter(
      eachVideo => eachVideo.id === video.id,
    )
    if (filteredArray.length !== 0) {
      const isAlreadyLiked = filteredArray[0].isLike === true
      if (isAlreadyLiked) {
        this.setState({savedVideos})
      } else {
        const newArray = savedVideos.filter(
          eachVideo => eachVideo.id !== video.id,
        )
        const object = filteredArray[0]
        this.setState({
          savedVideos: [
            ...newArray,
            {...object, isLiked: true, isDisLiked: false},
          ],
        })
      }
    } else {
      this.setState({isLiked: true, isDisLiked: false})
    }
  }

  onClickDisLikeBtn = video => {
    const {savedVideos} = this.state
    const filteredArray = savedVideos.filter(
      eachVideo => eachVideo.id === video.id,
    )
    if (filteredArray.length !== 0) {
      const isAlreadyLiked = filteredArray[0].isDisLike === true
      if (isAlreadyLiked) {
        this.setState({savedVideos})
      } else {
        const newArray = savedVideos.filter(
          eachVideo => eachVideo.id !== video.id,
        )
        const object = filteredArray[0]
        this.setState({
          savedVideos: [
            ...newArray,
            {...object, isLiked: false, isDisLiked: true},
          ],
        })
      }
    } else {
      this.setState({isLiked: false, isDisLiked: true})
    }
  }

  onClickThemeBtn = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  onChangeMenu = id => {
    this.setState({activeMenu: id})
  }

  render() {
    const {isDark, savedVideos, isLiked, isDisLiked, activeMenu} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          onClickThemeBtn: this.onClickThemeBtn,
          savedVideos,
          onClickSaveBtn: this.onClickSaveBtn,
          isLiked,
          onCLickLikeBtn: this.onCLickLikeBtn,
          isDisLiked,
          onClickDisLikeBtn: this.onClickDisLikeBtn,
          activeMenu,
          changeActiveMenu: this.onChangeMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingPage} />
          <ProtectedRoute exact path="/gaming" component={GamingPage} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosPage}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsPage}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
