import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  background-color: '#f9f9f9';
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const BodyContainer = styled.div`
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

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f1f5f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 20px 10px 20px 10px;
  width: 100%;
  height: 90vh;
`

export const NotFoundImg = styled.img`
  width: 70%;
  margin: 0px;
`

export const NotFoundH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#f4f4f4' : '#1e293b')};
  margin: 10px;
  text-align: center;
`

export const NotFoundP1 = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#f4f4f4' : ' #1e293b')};
  margin: 10px;
  text-align: center;
`
