import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const SidebarContainer = styled.aside `
  font-weight: bold;
  
  position: fixed;
  z-index: 999;
  width:100%;
  height:100%;
  background:#000;
  display:grid;
  align-items: center;
  top:0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const SidebarCloseIcon = styled(FaTimes) `
  color:#fff;
`

export const SidebarIcon = styled.div `
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div `
  color: #fff;
`

export const SidebarMenu = styled.ul `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 80px);
  }
  
`

export const SidebarLink = styled(LinkScroll) `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    color: #ddd;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarButtonWrap = styled.div `
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(LinkRouter) `
  margin:0;
  padding:0;
  color:#fff;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ddd;
  }
`