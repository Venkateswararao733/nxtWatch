import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const ResponsiveContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const VideoDetailsBodyContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  min-height: 90vh;
`

export const DesktopViewSlideBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0px;
`

export const LoaderE1 = styled(Loader)`
  color: #ffffff;
  width: 50px;
  height: 50vh;
`

export const FailureContainer = styled.div`
  background-color: transparent;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
`

export const FailureImg = styled.img`
  width: 60%;
  margin: 10px;
`

export const FailureH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  text-align: center;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  margin: 10px;
  text-align: center;
`

export const RetryBtn = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  border: 0px;
  outline: none;
  margin: 10px;
  padding: 10px 20px 10px 20px;
  font-family: 'Roboto';
  color: #ffffff;
  cursor: pointer;
`
export const VideoDetailsSuccessContainer = styled.div`
  background-color: transparent;
  min-height: 90vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const ReactPlayerContainer = styled.div`
  padding-top: 10px;
  margin: 10px 0px 10px 0px;
  width: 100%;
  @media (min-width: 768px) {
    margin: 20px;
    width: 96%;
  }
`

export const TitleE1 = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  @media (min-width: 768px) {
    margin: 10px 10px 10px 20px;
  }
`
export const ViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsDurationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`
export const ViewsDurationE1 = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#cbd5e1' : '#7e858e')};
  margin: 0px 10px 0px 0px;
`
export const LikesSaveContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 10px 0px;
  @media (min-width: 768px;) {
    margin: 0px;
  }
`
export const VideoButtons = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  margin: 0px 10px 0px 0px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LdsE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  margin: 0px 0px 0px 10px;
`
export const HrLine = styled.hr`
  width: 100%;
  margin: 10px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#7e858e')};
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 10px 0px 0px;
`

export const NSContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NameE1 = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#cccccc' : '#1e293b')};
  margin: 5px;
`
export const SubscriptionE1 = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isDark ? ' #cccccc' : '#7e858e')};
  margin: 5px;
`
export const DescriptionE1 = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  @media (min-width: 768px) {
    margin: 10px 10px 10px 60px;
  }
`
