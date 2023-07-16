import {Component} from 'react'
import Cookies from 'js-cookie'
import {GiGamepad} from 'react-icons/gi'

import NxtWatchContext from '../../context/NxtWatchContext'

import Headers from '../headers'
import SlideBar from '../slideBar'

import {
  ResponsiveContainer,
  GamingBodyContainer,
  DesktopViewSlideBar,
  GamingContainer,
  LoadingContainer,
  LoaderE1,
  FailureContainer,
  FailureImg,
  FailureH1,
  FailureDescription,
  RetryBtn,
  GamingSuccessContainer,
  GamingHeadingContainer,
  GamingLogoContainer,
  GamingHeading,
  GamesContainer,
  LinkItem,
  GameItemContainer,
  GameImg,
  GameDescriptionContainer,
  TitleE1,
  ViewsE1,
} from './styledComponents'

const gamingState = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class GamingPage extends Component {
  state = {gamingStatus: gamingState.initial, gamingVideosArray: []}

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({gamingStatus: gamingState.progress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `barer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const {videos} = jsonData
      const UpdatedVideos = videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingStatus: gamingState.success,
        gamingVideosArray: UpdatedVideos,
      })
    } else {
      this.setState({gamingStatus: gamingState.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getGamingDetails()
  }

  renderProgressView = () => (
    <LoadingContainer data-testid="loader">
      <LoaderE1 type="ThreeDots" />
    </LoadingContainer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const FailureSrc = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImg src={FailureSrc} alt="failure view" />
            <FailureH1 isDark={isDark}>Oops! Something Went Wrong</FailureH1>
            <FailureDescription isDark={isDark}>
              We are having Some Trouble to complete your request.Please try
              again.
            </FailureDescription>
            <RetryBtn type="button" onClick={this.onClickRetryBtn}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderEachVideoItem = video => {
    const {id, thumbnailUrl, title, viewCount} = video
    return (
      <NxtWatchContext.Consumer key={id}>
        {value => {
          const {isDark} = value
          return (
            <GameItemContainer>
              <LinkItem to={`/videos/${id}`}>
                <GameImg src={thumbnailUrl} alt="video thumbnail" />
                <GameDescriptionContainer>
                  <TitleE1 isDark={isDark}>{title}</TitleE1>
                  <ViewsE1 isDark={isDark}>
                    {viewCount} Watching Worldwide
                  </ViewsE1>
                </GameDescriptionContainer>
              </LinkItem>
            </GameItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {gamingVideosArray} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingSuccessContainer>
              <GamingHeadingContainer isDark={isDark}>
                <GamingLogoContainer isDark={isDark}>
                  <GiGamepad size={30} />
                </GamingLogoContainer>
                <GamingHeading isDark={isDark}>Gaming</GamingHeading>
              </GamingHeadingContainer>
              <GamesContainer>
                {gamingVideosArray.map(eachVideo =>
                  this.renderEachVideoItem(eachVideo),
                )}
              </GamesContainer>
            </GamingSuccessContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderGamingDetails = () => {
    const {gamingStatus} = this.state
    switch (gamingStatus) {
      case gamingState.progress:
        return this.renderProgressView()
      case gamingState.failure:
        return this.renderFailureView()
      case gamingState.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <ResponsiveContainer isDark={isDark} data-testid="gaming">
              <Headers />
              <GamingBodyContainer>
                <DesktopViewSlideBar>
                  <SlideBar />
                </DesktopViewSlideBar>
                <GamingContainer isDark={isDark}>
                  {this.renderGamingDetails()}
                </GamingContainer>
              </GamingBodyContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingPage
