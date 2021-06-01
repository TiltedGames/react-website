import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
//import { Link as LinkScroll } from 'react-scroll'
import smallLogoImage from '../../img/text-logo-small.png';
import roundLogo from '../../img/round-logo.png';
import {FaArrowRight, FaGithub} from "react-icons/all";
import {ArrowForward, ArrowRight} from "../ButtonElements";

// all image elements

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

export const GithubIcon = styled(FaGithub) `
  position: absolute;
  top: -6px;
  left: -23px;
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

export const RoundLogo = styled.div  `
  position: absolute;
  top: -4px;
  left: -22px;
  background: url(${ roundLogo }) no-repeat;
  background-size: cover;
  height:48px;
  width:48px;
  border-radius:100px;
  margin-top: -16px;
`

// carets for left-side of vertical bar

export const AltSelectionCaret = styled(ArrowRight) `
  position: absolute;
  top: -4px;
  left: -54px;
  visibility: hidden;
`

export const GithubSelectionCaret = styled(ArrowRight) `
  position: absolute;
  top: 8px;
  left: -54px;
  visibility: hidden;
`

export const SelectionCaret = styled(ArrowRight) `
  position: absolute;
  top: 54px;
  left: -40px;
  visibility: hidden;
`

// wrapper that places the vertical nav bar

export const NavBarWrapper = styled.div `
  z-index: 1000;
  position: absolute;
  left: 50px;
  top: calc(50vh - 330px);
  color: #fff;
  
`

// wrapper for middle item (part of vertical bar)

export const SitePageLinkWrapper = styled.div `
  border-left: 3px solid #fff;
`

// subpage list (in-site)

export const NavSubitems = styled.ul `
  list-style: none;
  text-align: left;
  position: relative;
  visibility: hidden;
  padding:0;
`

// subpage list (on github)

export const GithubPageLinkWrapper = styled.div `
  border-left: 0;
  margin-top: 24px;
  padding: 0 0 24px 0;
`

export const GithubSubitems = styled.ul `
  list-style: none;
  text-align: left;
  position: relative;
  visibility: hidden;
  padding:0;
`

// subpage list item

export const NavSubitemContent = styled.li `
  position: initial;
  padding: 0 0 22px 0;
  color: #fff;
  text-decoration: none;
  margin-left:-300px;
  transition: all 0.2s ease-in-out;
`

// nav bar is implemented as a list

export const lNavBar = styled.ul `
  text-align: center;
  list-style: none;
`

export const PageLink = styled.li `
  position:relative;
  padding-top:16px;
  
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
    
    ${ NavSubitemContent } {
      margin-left: 0;
      visibility: visible;
      padding:30px 0 0 60px;
    }
    
    ${ GithubPageLinkWrapper } {
      border-left: 3px solid #fff;
    }
  }
`

export const VerticalNavItemContent = styled.div `
  padding-left: 40px;
  padding-top: 40px;
  text-align: left;
  color: #fff;
  text-decoration: none;
`

// clickable button areas

export const HomePageLinkSelectionArea = styled.div `
  
`

export const LinkSelectionArea = styled.div `

`

export const GithubLinkSelectionArea = styled.div `

`