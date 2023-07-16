import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.form`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  margin: 0px;
  padding: 30px 20px 30px 20px;
  width: 70%;
  border: 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const LoginLogo = styled.img`
  width: 100px;
  margin: 10px;
  align-self: center;
`

export const LabelE1 = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin: 10px 0px 3px 10px;
`

export const InputE1 = styled.input`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#7e858e' : '#64748b')};
  border-radius: 2px;
  outline: none;
  margin: 3px 10px 5px 10px;
  padding: 7px;
  font-family: 'Roboto';
  color: #7e858e;
  font-weight: 500;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 0px;
`

export const CheckboxLabelE1 = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#383838')};
  margin: 0px;
  cursor: pointer;
`

export const CheckboxInputE1 = styled.input`
  margin: 0px 5px 0px 0px;
  cursor: pointer;
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: 0px;
  border-radius: 10px;
  outline: none;
  width: 90%;
  margin: 10px 10px 0px 10px;
  padding: 15px 20px 15px 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isDark ? '#ff0b37' : '#ff0000')};
  margin: 5px 10px 10px 10px;
`
