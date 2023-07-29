import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import {
  ResponsiveContainer,
  HomeBodyContainer,
  DesktopViewSlideBar,
  HomeContainer,
  BannerContainer,
  BannerCloseBtn,
  BannerLogo,
  BannerDescription,
  BannerBtn,
  HomeSearchContainer,
  HomeInputSearch,
  SearchBtn,
  LoadingContainer,
  LoaderE1,
  FailureSearchContainer,
  FailureSearchImg,
  FailureSearchH1,
  FailureSearchDescription,
  RetryBtn,
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
import NxtWatchContext from '../../context/NxtWatchContext'

import Headers from '../headers'
import SlideBar from '../slideBar'

const HomeState = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

const activeMenuConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
  videoItemDetails: 'VIDEO_ITEM_DETAILS',
}

class Home extends Component {
  state = {
    homeStatus: HomeState.initial,
    searchValue: '',
    videosArray: [],
    isClickedCloseBtn: false,
  }

  componentDidMount() {
    this.getHomeDetails()
  }

  getHomeDetails = async () => {
    this.setState({homeStatus: HomeState.progress})
    const {searchValue} = this.state
    const homeUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `barer ${jwtToken}`,
      },
    }
    const response = await fetch(homeUrl, options)
    const jsonData = await response.json()
    if (response.ok === true) {
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
      this.setState({homeStatus: HomeState.success, videosArray: updatedVideos})
    } else {
      this.setState({homeStatus: HomeState.failure})
    }
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getHomeDetails()
  }

  onClickRetryBtn = () => {
    this.getHomeDetails()
  }

  onClickBannerCloseBtn = () => {
    this.setState({isClickedCloseBtn: true})
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
          <FailureSearchContainer>
            <FailureSearchImg src={FailureSrc} alt="failure view" />
            <FailureSearchH1 isDark={isDark}>
              Oops! Something Went Wrong
            </FailureSearchH1>
            <FailureSearchDescription isDark={isDark}>
              We are having Some Trouble to complete your request.Please try
              again.
            </FailureSearchDescription>
            <RetryBtn type="button" onClick={this.onClickRetryBtn}>
              Retry
            </RetryBtn>
          </FailureSearchContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const FailureSearchSrc =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
        return (
          <FailureSearchContainer>
            <FailureSearchImg src={FailureSearchSrc} alt="no videos" />
            <FailureSearchH1 isDark={isDark}>
              No Search results found
            </FailureSearchH1>
            <FailureSearchDescription isDark={isDark}>
              Try different key words or remove search filter
            </FailureSearchDescription>
            <RetryBtn type="button" onClick={this.onClickRetryBtn}>
              Retry
            </RetryBtn>
          </FailureSearchContainer>
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

  renderVideosView = () => {
    const {videosArray} = this.state
    return (
      <VideosContainer>
        {videosArray.map(eachVideo => this.renderEachVideo(eachVideo))}
      </VideosContainer>
    )
  }

  renderSuccessView = () => {
    const {videosArray} = this.state
    const noVideos = videosArray.length === 0
    return noVideos ? this.renderNoVideosView() : this.renderVideosView()
  }

  renderHomeDetails = () => {
    const {homeStatus} = this.state
    switch (homeStatus) {
      case HomeState.progress:
        return this.renderProgressView()
      case HomeState.failure:
        return this.renderFailureView()
      case HomeState.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchValue, isClickedCloseBtn} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const BannerSrc =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <ResponsiveContainer isDark={isDark} data-testid="home">
              <Headers />
              <HomeBodyContainer>
                <DesktopViewSlideBar>
                  <SlideBar />
                </DesktopViewSlideBar>
                <HomeContainer isDark={isDark}>
                  {isClickedCloseBtn ? (
                    ''
                  ) : (
                    <BannerContainer data-testid="banner">
                      <BannerCloseBtn
                        type="button"
                        data-testid="close"
                        onClick={this.onClickBannerCloseBtn}
                      >
                        <AiOutlineClose size={20} />
                      </BannerCloseBtn>
                      <BannerLogo src={BannerSrc} alt="nxt watch logo" />
                      <BannerDescription>
                        Buy Nxt Watch Premium
                      </BannerDescription>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </BannerContainer>
                  )}
                  <HomeSearchContainer>
                    <HomeInputSearch
                      type="search"
                      value={searchValue}
                      placeholder="Search"
                      onChange={this.onChangeSearchValue}
                      isDark={isDark}
                    />
                    <SearchBtn
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchBtn}
                      isDark={isDark}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchBtn>
                  </HomeSearchContainer>
                  {this.renderHomeDetails()}
                </HomeContainer>
              </HomeBodyContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
