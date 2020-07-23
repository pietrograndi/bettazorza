import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { MenuItem } from './Item'

export const PageList = ({src, ...props}) => {
  const handleClick = (e, path) => {
    e.preventDefault()
    if(window.location.pathname === path) { // Danger gestire window.location in SSR
      props.toggleMenu()
      return
    }
    navigate(path)
  }
  return (
    <ListWrapper {...props}>
      {
        src.nodes
          .map(({label, ...p}) => ({ 
            ...p, label: `${label.charAt(0).toUpperCase()}${label.slice(1)}`
          }))
          .map(p => <MenuItem key={p.id}>
            <a href="#" onClick={e => handleClick(e, p.path)}>{ p.label }</a>
          </MenuItem>)
      }
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: ${props => props.isOpen ? 'opacity .2s ease .2s' : 'opacity .2s ease'};
`