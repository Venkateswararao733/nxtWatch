import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import Headers from '../headers'
import SlideBar from '../slideBar'

import {
  ResponsiveContainer,
  TrendingBodyContainer,
  DesktopViewSlideBar,
  TrendingContainer,
  LoadingContainer,
  LoaderE1,
  FailureContainer,
  FailureImg,
  FailureH1,
  FailureDescription,
  RetryBtn,
  TrendingSuccessContainer,
  TrendingHeadingContainer,
  TrendingLogoContainer,
  TrendingHeading,
  VideosContainer,
  LinkItem,
  VideoItemContainer,
  VideoImg,
  VideoDescriptionContainer,
  ProfileImg,
  DescriptionContainer,
  TitleE1,
  NVTContainer,
  NameE1,
  VTContainer,
  VTE1,
} from './styledComponents'

const activeMenuConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
  videoItemDetails: 'VIDEO_ITEM_DETAILS',
}

const trendingState = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class TrendingPage extends Component {
  state = {trendingStatus: trendingState.initial, trendingVideosArray: []}

  componentDidMount() {
    this.getTrendingDetails()
  }

  getTrendingDetails = async () => {
    this.setState({trendingStatus: trendingState.progress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `barer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const {videos} = jsonData
      const updatedVideos = videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImgUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        trendingStatus: trendingState.success,
        trendingVideosArray: updatedVideos,
      })
    } else {
      this.setState({trendingStatus: trendingState.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getTrendingDetails()
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

  renderEachVideo = video => {
    const {id, channel, publishedAt, thumbnailUrl, viewCount, title} = video
    const {name, profileImgUrl} = channel
    const FormattedDate = formatDistanceToNow(new Date(publishedAt))
    const splitDate = FormattedDate.split(' ')
    const spliceDate = splitDate.splice(1)
    const newDate = spliceDate.join(' ')
    return (
      <NxtWatchContext.Consumer key={id}>
        {value => {
          const {isDark, changeActiveMenu} = value
          return (
            <VideoItemContainer>
              <LinkItem
                to={`/videos/${id}`}
                onClick={() =>
                  changeActiveMenu(activeMenuConstants.videoItemDetails)
                }
              >
                <VideoImg src={thumbnailUrl} alt="video thumbnail" />
                <VideoDescriptionContainer>
                  <ProfileImg src={profileImgUrl} alt="channel logo" />
                  <DescriptionContainer>
                    <TitleE1 isDark={isDark}>{title}</TitleE1>
                    <NVTContainer>
                      <NameE1 isDark={isDark}>{name}</NameE1>
                      <VTContainer>
                        <VTE1 isDark={isDark}>{viewCount}</VTE1>
                        <VTE1 isDark={isDark}>{newDate} ago</VTE1>
                      </VTContainer>
                    </NVTContainer>
                  </DescriptionContainer>
                </VideoDescriptionContainer>
              </LinkItem>
            </VideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {trendingVideosArray} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingSuccessContainer>
              <TrendingHeadingContainer isDark={isDark}>
                <TrendingLogoContainer isDark={isDark}>
                  <FaFire size={30} />
                </TrendingLogoContainer>
                <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
              </TrendingHeadingContainer>
              <VideosContainer>
                {trendingVideosArray.map(eachVideo =>
                  this.renderEachVideo(eachVideo),
                )}
              </VideosContainer>
            </TrendingSuccessContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderTrendingDetails = () => {
    const {trendingStatus} = this.state
    switch (trendingStatus) {
      case trendingState.progress:
        return this.renderProgressView()
      case trendingState.failure:
        return this.renderFailureView()
      case trendingState.success:
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
            <ResponsiveContainer isDark={isDark} data-testid="trending">
              <Headers />
              <TrendingBodyContainer>
                <DesktopViewSlideBar>
                  <SlideBar />
                </DesktopViewSlideBar>
                <TrendingContainer isDark={isDark}>
                  {this.renderTrendingDetails()}
                </TrendingContainer>
              </TrendingBodyContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingPage
