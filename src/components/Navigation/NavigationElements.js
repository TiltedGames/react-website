import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
//import { Link as LinkScroll } from 'react-scroll'
import smallLogoImage from '../../img/text-logo-small.png';
import roundLogo from '../../img/round-logo.png';
import {FaArrowRight, FaGithub} from "react-icons/all";
import {ArrowForward, ArrowRight} from "../ButtonElements";

/*

        IMAGE COMPONENT SECTION

 */

// round Tilted Games logo
export const RoundLogo = styled.span  `
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

// Github icon (from fontawesome)
export const GithubIcon = styled(FaGithub) `
  position: absolute;
  top: -6px;
  left: -23px;
`

// icon for mobile menu display
export const MobileIcon = styled.div `
  // hidden by default
  display:none;
  
  // show if narrow device/viewport
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

// caret for the home icon link
export const HomeCaret = styled(ArrowRight) `
  position: absolute;
  top: -4px;
  left: -54px;
  visibility: hidden;
`

// caret for the middle links
export const Caret = styled(ArrowRight) `
  position: absolute;
  top: 54px;
  left: -40px;
  visibility: hidden;
`

// caret for the Github icon link
export const GithubCaret = styled(ArrowRight) `
  position: absolute;
  top: 8px;
  left: -54px;
  visibility: hidden;
`



/*

        GITHUB LINKS SECTION

 */

// subpage list
export const GithubPageLinkWrapper = styled.ul `
  border-left: 0;
  margin-top: 24px;
  //padding: 0 0 24px 0;
  list-style: none;
  text-align: left;
  position: relative;
  visibility: hidden;
  padding:0;
`

// subpage item
export const GithubPageLink = styled.li `

`



/*

        INTERNAL LINKS SECTION

 */

// wrapper that places the vertical nav bar
export const Wrapper = styled.div `
  z-index: 1000;
  position: absolute;
  left: 50px;
  top: calc(50vh - 330px);
  color: #fff;
  
`

// wrapper for middle item (part of vertical bar)
export const LinkWrapper = styled.div `
  border-left: 3px solid #fff;
`

// subpage list (in-site)
export const SubpageLinks = styled.ul `
  list-style: none;
  text-align: left;
  position: relative;
  visibility: hidden;
  padding:0;
`

// subpage list item
export const SubpageLink = styled.li `
  position: initial;
  padding: 0 0 22px 0;
  color: #fff;
  text-decoration: none;
  margin-left:-300px;
  transition: all 0.2s ease-in-out;
`

// navigation bar
export const Bar = styled.ul `
  list-style: none;
`

// navigation section
export const Page = styled.li `
  position:relative;
  padding-top:16px;
  
  &:hover {
    ${ Caret } {
      visibility: visible;
    }
    
    ${ HomeCaret } {
      visibility: visible;
    }
    
    ${ SubpageLink } {
      margin-left: 0;
      visibility: visible;
      padding:30px 0 0 60px;
    }
  }
`

// navigation section
export const GithubPage = styled.li `
  position:relative;
  padding-top:16px;
  
  &:hover {
    ${ GithubCaret } {
      visibility: visible;
    }
    
    ${ SubpageLink } {
      margin-left: 0;
      visibility: visible;
      padding:30px 0 0 60px;
    }
    
    ${ GithubPageLinkWrapper } {
      border-left: 3px solid #fff;
    }
  }
`

export const Label = styled.label `
  padding-left: 40px;
  padding-top: 40px;
  text-align: left;
  color: #fff;
  text-decoration: none;
`