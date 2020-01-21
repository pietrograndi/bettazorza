import styled from "styled-components"
import { Link } from "gatsby"
import { colors, media } from "../../../style/constants"

export const ListWrapper = styled.div`
  margin: 5em auto;
  ${media.sm`
    margin-top: 6.25em;
    width: 90%;
  `}
`

export const MenuItem = styled.div`
  margin-bottom: 2em;
  ${media.sm`
    text-align: center;
  `}
`

export const MenuLink = styled(Link)`
  color: ${colors.purple};
  font-weight: 900;
  letter-spacing: 0.15em;
  &:hover {
    text-decoration: underline;
    color: ${colors.purple};
  }
  &::first-letter {
    text-transform: uppercase;
  }
`
export const MyLink = styled.a`
  font-size: 3rem;
  color: ${colors.purple};
  font-weight: 900;
  letter-spacing: 0.15em;
  &:hover {
    text-decoration: underline;
    color: ${colors.purple};
  }
  &::first-letter {
    text-transform: uppercase;
  }
`
