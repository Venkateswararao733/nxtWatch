import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ResponsiveContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const SavedVideosBodyContainer = styled.div`
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
export const SavedVideosMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const NoVideosContainer = styled.div`
  background-color: transparent;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
`

export const NoVideosImg = styled.img`
  width: 60%;
  margin: 10px;
`

export const NoVideosH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  text-align: center;
`
export const NoVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#cbd5e1' : '#1e293b')};
  margin: 10px;
  text-align: center;
`

export const SavedVideosContainer = styled.div`
  background-color: transparent;
  min-height: 90vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`

export const SavedVideosHeadingContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #181818' : ' #ebebeb')};
  margin: 0px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
`
export const SavedVideosLogoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
  margin: 10px;
  padding: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  margin: 10px;
`
export const SavedVideosListContainer = styled.ul`
  background-color: transparent;
  min-height: 50vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  max-height: 90vh;
  overflow-y: auto;
`

export const SavedVideoItemContainer = styled.li`
  list-style-type: none;
  margin: 15px 0px 15px 0px;
  padding: 0px;
  width: 100%;
  @media (min-width: 576px) {
    margin: 15px;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const SavedVideoImg = styled.img`
  width: 100%;
  margin: 0px;
  @media (min-width: 576px) {
    width: 50%;
    max-height: 200px;
  }
`
export const SavedVideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  padding: 0px;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 0px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 5px;
`
export const TitleE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 5px;
`
export const NVTContainer = styled.div`
  display: flex;
  margin: 5px;
  padding: 0px;
  @media (min-width: 576px) {
    flex-direction: column;
  }
`

export const NameE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isDark ? ' #cccccc' : '#7e858e')};
  margin: 5px;
`

export const VTContainer = styled.div`
  display: flex;
`

export const VTE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#cccccc' : '#7e858e')};
  margin: 5px;
`
