import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 10vh;
`

export const WebsiteLogo = styled.img`
  width: 80px;
  margin: 10px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 0px;
  padding: 0px;
`

export const MobileViewContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const SlideBarMobileContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  @media (min-width: 768px) {
    display: none;
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

export const ListItems = styled.li`
  list-style-type: none;
  margin: 0px 3px 0px 3px;
  padding: 0px;
`

export const IconsBtn = styled.button`
  background-color: transparent;
  margin: 5px;
  padding: 5px;
  border: 0px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#f1f5f9' : '#181818')};
`

export const IconsImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px;
`

export const DesktopViewContainer = styled.ul`
  display: none;
  margin: 0px;
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`
export const LogOutDesktopBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  margin: 5px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
`
export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupThreeLinesContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 20px;
  min-height: 100vh;
  min-width: 90vw;
`

export const MobileSlideBar = styled.div`
  align-self: center;
  margin: 150px 10px 40px 10px;
`
export const PopUpCardContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 25vh;
`

export const PopUpDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#4f46e5')};
  margin: 10px;
  text-align: center;
`
export const PopUpBtnContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PopUpBtn = styled.button`
  background-color: ${props =>
    props.text === 'confirm' ? '#3b82f6' : 'transparent'};
  border: 1px solid
    ${props => (props.text === 'confirm' ? '#3b82f6' : '#cdb5e1')};
  border-radius: 5px;
  outline: none;
  margin: 10px;
  padding: 10px 15px 10px 15px;
  font-family: 'Roboto';
  color: ${props => (props.text === 'confirm' ? '#ffffff' : '#cdb5e1')};
  cursor: pointer;
`
export const PopUpMobileBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 0px;
  outline: none;
  margin: 10px;
  cursor: pointer;
`
