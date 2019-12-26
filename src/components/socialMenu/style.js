import styled from "styled-components"
// import { colors } from "../../style/constants"

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5em;
  margin: 0 auto;
  border-right: ${props => (props.last ? "none" : `1px solid`)};
  border-right-color: ${props => props.color};
`

export const getIconStyled = icon => {
  return styled(icon)`
    color: ${props => props.color};
    width: 1.6em;
    height: 1.6em;
    margin: 0 auto;
    opacity: 0.8;
    transition: opacity 0.25s linear;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  `
}