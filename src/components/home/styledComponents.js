import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

export const ResponsiveContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const HomeBodyContainer = styled.div`
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
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`
export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  margin: 10px;
  padding: 0px;
  align-self: flex-end;
  cursor: pointer;
`

export const BannerLogo = styled.img`
  width: 100px;
  margin: 10px;
`

export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin: 10px;
  width: 50%;
`
export const BannerBtn = styled.button`
  background-color: transparent;
  border: 1px solid #475569;
  border-radius: 1px;
  outline: none;
  margin: 10px;
  padding: 10px 15px 10px 15px;
  font-family: 'Roboto';
  color: #1e293b;
  align-self: flex-start;
`

export const HomeSearchContainer = styled.div`
  background-color: transparent;
  border: 0px;
  margin: 20px;
  padding: 0px;
  display: flex;
  align-items: center;
  width: 90%;
  @media (min-width: 768px) {
    width: 60%;
  }
`
export const HomeInputSearch = styled.input`
  background-color: transparent;
  border: 1px solid #7e858e;
  outline: none;
  margin: 0px;
  padding: 7px;
  color: ${props => (props.isDark ? '#ebebeb' : '#424242')};
  font-family: 'Roboto';
  font-weight: 500;
  width: 85%;
`

export const SearchBtn = styled.button`
  background-color: ${props => (props.isDark ? '#181818' : '#cbd5e1')};
  border: 1px solid #7e858e;
  outline: none;
  margin: 0px;
  padding: 4px 10px 4px 10px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ebebeb' : '#181818')};
  width: 15%;
  align-items: center;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  margin: 0px;
`

export const LoaderE1 = styled(Loader)`
  color: #ffffff;
  width: 50px;
  height: 50vh;
`
export const FailureSearchContainer = styled.div`
  background-color: transparent;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
`

export const FailureSearchImg = styled.img`
  width: 60%;
  margin: 10px;
`

export const FailureSearchH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  text-align: center;
`
export const FailureSearchDescription = styled.p`
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
export const VideosContainer = styled.ul`
  background-color: transparent;
  min-height: 50vh;
  width: 100%;
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-height: 70vh;
  overflow-y: auto;
`

export const VideoItemContainer = styled.li`
  list-style-type: none;
  margin: 10px;
  padding: 0px;
  width: 100%;
  @media (min-width: 576px) {
    width: 45%;
  }
  @media (min-width: 768px) {
    width: 28%;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
`

export const VideoImg = styled.img`
  width: 100%;
  margin: 0px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  padding: 0px;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 0px;
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
  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export const NameE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 300;
  color: ${props => (props.isDark ? '#cccccc' : '#7e858e')};
  margin: 5px;
`

export const VTContainer = styled.div`
  display: flex;
`

export const VTE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 300;
  color: ${props => (props.isDark ? '#cccccc' : '#7e858e')};
  margin: 5px;
`
