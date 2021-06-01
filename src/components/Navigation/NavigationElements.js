import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
//import { Link as LinkScroll } from 'react-scroll'
import smallLogoImage from '../../img/text-logo-small.png';
import roundLogo from '../../img/round-logo.png';
import {FaArrowRight, FaGithub} from "react-icons/all";
import {ArrowForward, ArrowRight} from "../ButtonElements";

/*

        START OLD NAVIGATION

 */

export const Navigation = styled.nav `
  font-weight: bold;
  background: transparent;
  height: 80px;
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

export const NavigationLogoLink = styled(LinkRouter) `
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

export const NavigationLogo = styled.div `
  background-image: url(${smallLogoImage});
  border: 1px solid #fff;
  width: 166px;
  height: 60px;
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

export const NavigationLinks = styled(LinkRouter) `
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
/*

        END OLD NAVIGATION



        START NEW NAVIGATION

 */

export const RoundLogo = styled.div  `
  position: absolute;
  top: -4px;
  left: -16px;
  background: url(${ roundLogo }) no-repeat;
  background-size: cover;
  height:48px;
  width:48px;
  border-radius:100px;
  margin-top: -16px;
`

export const AltSelectionCaret = styled(ArrowRight) `
  position: absolute;
  top: -4px;
  left: -48px;
  visibility: hidden;
`

export const GithubSelectionCaret = styled(ArrowRight) `
  position: absolute;
  top: 8px;
  left: -48px;
  visibility: hidden;
`

export const SelectionCaret = styled(ArrowRight) `
  position: absolute;
  top: 0;
  left: -40px;
  visibility: hidden;
`

export const VerticalNavBarWrapper = styled.div `
  z-index: 1000;
  position: absolute;
  right: 160px;
  top: calc(50vh - 250px);
  color: #fff;
  
`

export const VerticalNavBar = styled.ul `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 130px);
  text-align: center;
  list-style: none;
`

export const VerticalNavItem = styled.li `
  height: 100px;
  position:relative;
  
  &:hover {
    ${ SelectionCaret } {
      visibility: visible;
    }
    
    ${ AltSelectionCaret } {
      visibility: visible;
    }

    ${ GithubSelectionCaret } {
      visibility: visible;
    }
  }
`

export const VerticalSeparator = styled.div `
  position:absolute;
  top:0;
  left:5px;
  height: 130px;
  width: 3px;
  background: #fff;
`

export const VerticalNavItemNumber = styled.div `
  position:absolute;
  top:-5px;
  left:-11px;
  padding:5px 10px;
  margin:0;
  border-radius: 100px;
  border:3px solid #fff;
`

export const VerticalNavItemContent = styled.div `
  position:absolute;
  top:2px;
  padding-left: 20px;
  text-align: left;
`

export const GithubIcon = styled(FaGithub) `
  position: absolute;
  top: -6px;
  left: -18px;
`

export const HomePageLinkSelectionArea = styled.div `
  
`

export const LinkSelectionArea = styled.div `

`

export const GithubLinkSelectionArea = styled.div `

`
