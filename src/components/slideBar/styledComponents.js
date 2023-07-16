import styled from 'styled-components'

export const SlideBarMobileContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const SlideBarDesktopContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin: 0px;
  min-height: 90vh;
  max-width: 220px;
  @media (min-width: 768px) {
    display: flex;
  }
`

export const SlideItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  width: 100%;
`

export const SlideItem = styled.li`
  list-style-type: none;
  margin: 5px 10px 5px 0px;
  width: 100%;
  background-color: ${props => (props.isActive ? '#424242' : 'transparent')};
  display: flex;
  align-items: center;
`

export const SlideName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f8fafc' : '#909090')};
  margin: 0px 0px 0px 15px;
`
export const SlideBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`

export const ContactUsp1 = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px 0px 10px 0px;
`

export const FollowAppsContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 10px 0px 10px 0px;
  padding: 0px;
`

export const FollowAppListItem = styled.li`
  margin: 0px 10px 0px 0px;
  padding: 0px;
  list-style-type: none;
`

export const AppImage = styled.img`
  width: 25px;
  margin: 0px;
`

export const SlideDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin: 10px 0px 10px 0px;
  width: 60%;
`
