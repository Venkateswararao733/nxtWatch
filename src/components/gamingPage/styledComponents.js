import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

export const ResponsiveContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const GamingBodyContainer = styled.div`
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
export const GamingContainer = styled.div`
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
export const GamingSuccessContainer = styled.div`
  background-color: transparent;
  min-height: 90vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`
export const GamingHeadingContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #181818' : ' #ebebeb')};
  margin: 0px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
`
export const GamingLogoContainer = styled.div`
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

export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  margin: 10px;
`
export const GamesContainer = styled.ul`
  background-color: transparent;
  min-height: 50vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  overflow-y: auto;
`

export const GameItemContainer = styled.li`
  list-style-type: none;
  margin: 20px;
  padding: 0px;
  width: 40%;
  @media (min-width: 576px) {
    width: 27%;
    margin: 10px;
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

export const GameImg = styled.img`
  width: 100%;
  margin: 0px;
`
export const GameDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
  padding: 0px;
`

export const TitleE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 5px 0px 5px 0px;
`
export const ViewsE1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#94a3b8' : '#7e858e')};
  margin: 5px 0px 5px 0px;
`
