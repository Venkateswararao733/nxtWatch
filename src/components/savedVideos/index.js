import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import Headers from '../headers'
import SlideBar from '../slideBar'

import {
  ResponsiveContainer,
  SavedVideosBodyContainer,
  DesktopViewSlideBar,
  SavedVideosMainContainer,
  NoVideosContainer,
  NoVideosImg,
  NoVideosH1,
  NoVideosDescription,
  SavedVideosContainer,
  SavedVideosHeadingContainer,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  SavedVideosListContainer,
  LinkItem,
  SavedVideoItemContainer,
  SavedVideoImg,
  SavedVideoDescriptionContainer,
  ProfileImg,
  DescriptionContainer,
  TitleE1,
  NVTContainer,
  NameE1,
  VTContainer,
  VTE1,
} from './styledComponents'

class SavedVideosPage extends Component {
  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const NoVideosSrc =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
        return (
          <NoVideosContainer>
            <NoVideosImg src={NoVideosSrc} alt=" no saved videos" />
            <NoVideosH1 isDark={isDark}>No saved videos found</NoVideosH1>
            <NoVideosDescription isDark={isDark}>
              Save your videos by clicking a button
            </NoVideosDescription>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSavedVideoItem = video => {
    const {id, channel, publishedAt, thumbnailUrl, viewCount, title} = video
    const {name, profileImgUrl} = channel
    const FormattedDate = formatDistanceToNow(new Date(publishedAt))
    const splitDate = FormattedDate.split(' ')
    const spliceDate = splitDate.splice(1)
    const newDate = spliceDate.join(' ')
    return (
      <NxtWatchContext.Consumer key={id}>
        {value => {
          const {isDark} = value
          return (
            <SavedVideoItemContainer>
              <LinkItem to={`/videos/${id}`}>
                <SavedVideoImg src={thumbnailUrl} alt="video thumbnail" />
                <SavedVideoDescriptionContainer>
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
                </SavedVideoDescriptionContainer>
              </LinkItem>
            </SavedVideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSavedVideosDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        return (
          <SavedVideosContainer>
            <SavedVideosHeadingContainer isDark={isDark}>
              <SavedVideosLogoContainer isDark={isDark}>
                <FaFire size={30} />
              </SavedVideosLogoContainer>
              <SavedVideosHeading isDark={isDark}>
                Saved Videos
              </SavedVideosHeading>
            </SavedVideosHeadingContainer>
            <SavedVideosListContainer>
              {savedVideos.map(eachVideo =>
                this.renderSavedVideoItem(eachVideo),
              )}
            </SavedVideosListContainer>
          </SavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          const noSavedVideos = savedVideos.length === 0
          return (
            <ResponsiveContainer isDark={isDark} data-testid="savedVideos">
              <Headers />
              <SavedVideosBodyContainer>
                <DesktopViewSlideBar>
                  <SlideBar />
                </DesktopViewSlideBar>
                <SavedVideosMainContainer isDark={isDark}>
                  {noSavedVideos
                    ? this.renderNoVideosView()
                    : this.renderSavedVideosDetails()}
                </SavedVideosMainContainer>
              </SavedVideosBodyContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosPage
