import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Navigation = styled.nav `
  font-weight: bold;
  
  background: transparent;
  height: 80px;
  //margin-top:-80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {

  }
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
  }

`

export const NavigationContainer = styled.div `
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavigationLogo = styled(LinkRouter) `
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div `
  display:none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavigationMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width:768px) {
    display: none;
  }
`

export const NavigationItem = styled.li `
  height: 10vh;
`

export const NavigationLinks = styled(LinkScroll) `
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const NavigationButton = styled.nav `
  display: flex;
  align-items: center;
  font-size:1.8rem;
  cursor: pointer;
  color: #fff;
  margin:0;
  padding:0;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavigationButtonLink = styled.a `
  margin:0;
  padding:5px 5px 0 5px;
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