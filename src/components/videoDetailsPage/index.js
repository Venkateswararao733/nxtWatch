import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'

import {
  ResponsiveContainer,
  VideoDetailsBodyContainer,
  DesktopViewSlideBar,
  VideoDetailsContainer,
  LoadingContainer,
  LoaderE1,
  FailureContainer,
  FailureImg,
  FailureH1,
  FailureDescription,
  RetryBtn,
  VideoDetailsSuccessContainer,
  ReactPlayerContainer,
  TitleE1,
  ViewsLikesContainer,
  ViewsDurationContainer,
  ViewsDurationE1,
  LikesSaveContainer,
  VideoButtons,
  LdsE1,
  HrLine,
  ChannelContainer,
  ProfileImg,
  NSContainer,
  NameE1,
  SubscriptionE1,
  DescriptionE1,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'
import Headers from '../headers'
import SlideBar from '../slideBar'

const VideoDetailsState = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class VideoDetailsPage extends Component {
  state = {videoStatus: VideoDetailsState.initial, videoDetailsObject: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({videoStatus: VideoDetailsState.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `barer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const videoDetails = jsonData.video_details
      const updatedVideoDetails = {
        channel: {
          name: videoDetails.channel.name,
          profileImgUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        videoStatus: VideoDetailsState.success,
        videoDetailsObject: updatedVideoDetails,
      })
    } else {
      this.setState({videoStatus: VideoDetailsState.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getVideoDetails()
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
              We are having some trouble to complete your request. Please try
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

  renderSuccessView = () => {
    const {videoDetailsObject} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetailsObject
    const {name, profileImgUrl, subscriberCount} = channel
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDark,
            onClickSaveBtn,
            isLiked,
            onClickDisLikeBtn,
            onCLickLikeBtn,
            isDisLiked,
            savedVideos,
          } = value
          let saved
          let liked = isLiked
          let disLiked = isDisLiked
          const filterSavedVideos = savedVideos.filter(
            eachVideo => eachVideo.id === videoDetailsObject.id,
          )
          const isSavedAlready = filterSavedVideos.length !== 0
          if (isSavedAlready) {
            saved = true
            liked = filterSavedVideos[0].isLiked
            disLiked = filterSavedVideos[0].isDisLiked
          }
          const SavedText = saved ? 'Saved' : 'Save'
          const onClickedSaveBtn = () => {
            onClickSaveBtn(videoDetailsObject)
          }
          const onClickedLikeBtn = () => {
            onCLickLikeBtn(videoDetailsObject)
          }
          const onClickedDisLikeBtn = () => {
            onClickDisLikeBtn(videoDetailsObject)
          }
          const FormattedDate = formatDistanceToNow(new Date(publishedAt))
          const splitDate = FormattedDate.split(' ')
          const spliceDate = splitDate.splice(1)
          const newDate = spliceDate.join(' ')
          return (
            <VideoDetailsSuccessContainer>
              <ReactPlayerContainer>
                <ReactPlayer url={`${videoUrl}`} width="100%" height="360px" />
              </ReactPlayerContainer>
              <TitleE1 isDark={isDark}>{title}</TitleE1>
              <ViewsLikesContainer>
                <ViewsDurationContainer>
                  <ViewsDurationE1 isDark={isDark}>
                    {viewCount} views
                  </ViewsDurationE1>
                  <ViewsDurationE1 isDark={isDark}>
                    {newDate} ago
                  </ViewsDurationE1>
                </ViewsDurationContainer>
                <LikesSaveContainer>
                  <VideoButtons
                    type="button"
                    isLiked={liked}
                    onClick={onClickedLikeBtn}
                  >
                    <AiOutlineLike size={20} />
                    <LdsE1 isLiked={liked}>Like</LdsE1>
                  </VideoButtons>
                  <VideoButtons
                    type="button"
                    isLiked={disLiked}
                    onClick={onClickedDisLikeBtn}
                  >
                    <AiOutlineDislike size={20} />
                    <LdsE1 isLiked={disLiked}>Dislike</LdsE1>
                  </VideoButtons>
                  <VideoButtons
                    type="button"
                    isLiked={saved}
                    onClick={onClickedSaveBtn}
                  >
                    <BiListPlus size={20} />
                    <LdsE1 isLiked={saved}>{SavedText}</LdsE1>
                  </VideoButtons>
                </LikesSaveContainer>
              </ViewsLikesContainer>
              <HrLine isDark={isDark} />
              <ChannelContainer>
                <ProfileImg src={profileImgUrl} alt="channel logo" />
                <NSContainer>
                  <NameE1 isDark={isDark}>{name}</NameE1>
                  <SubscriptionE1 isDark={isDark}>
                    {subscriberCount} subscribers
                  </SubscriptionE1>
                </NSContainer>
              </ChannelContainer>
              <DescriptionE1 isDark={isDark}>{description}</DescriptionE1>
            </VideoDetailsSuccessContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideoDetails = () => {
    const {videoStatus} = this.state
    switch (videoStatus) {
      case VideoDetailsState.progress:
        return this.renderProgressView()
      case VideoDetailsState.failure:
        return this.renderFailureView()
      case VideoDetailsState.success:
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
            <ResponsiveContainer isDark={isDark} data-testid="videoItemDetails">
              <Headers />
              <VideoDetailsBodyContainer>
                <DesktopViewSlideBar>
                  <SlideBar />
                </DesktopViewSlideBar>
                <VideoDetailsContainer isDark={isDark}>
                  {this.renderVideoDetails()}
                </VideoDetailsContainer>
              </VideoDetailsBodyContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetailsPage
