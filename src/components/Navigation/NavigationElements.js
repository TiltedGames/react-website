import styled from 'styled-components'
//import { NavLink as LinkRouter } from 'react-router-dom'
//import { Link as LinkScroll } from 'react-scroll'
import roundLogo from '../../img/round-logo.png';
import {
    FaArrowRight,
    FaGithub} from "react-icons/all";
import {
    ArrowForward,
    ArrowRight
} from "../ButtonElements";

/*

        MAIN NAVIGATION COMPONENTS

 */

// wrapper (clear, controls placement)
export const Wrapper = styled.div `
  z-index: 1000;
  position: absolute;
  left: 50px;
  top: calc(50vh - 330px);
  color: #fff;
`

// list (all pages)
export const Bar = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
`

// round Tilted Games logo
export const RoundLogo = styled.span  `
  position: absolute;
  top: 0;
  left: -22px;
  background: url(${ roundLogo }) no-repeat;
  background-size: cover;
  height: 48px;
  width: 48px;
  border-radius: 100px;
  margin-top: -16px;
`

// Github icon (from fontawesome)
export const GithubIcon = styled(FaGithub) `
  position: absolute;
  top: -6px;
  left: -23px;
`

// caret (home icon link)
export const HomeCaret = styled(ArrowRight) `
  position: absolute;
  top: -4px;
  left: -54px;
  visibility: hidden;
`

// mobile menu display icon
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

// label (all links)
export const Label = styled.label `
  padding-left: 40px;
  text-align: left;
  color: #fff;
`


/*

        GITHUB SECTION

 */

// caret (Github page link)
export const GithubCaret = styled(ArrowRight) `
  position: absolute;
  top: 8px;
  left: -54px;
  visibility: hidden;
`

// subpage list
export const GithubPageLinkWrapper = styled.ul `
  border-left: 0;
  margin-top: 24px;
  list-style: none;
  text-align: left;
  position: relative;
  visibility: hidden;
  padding: 0;
  //padding: 0 0 24px 0;
`

// subpage item
export const GithubPageLink = styled.li `

`

// navigation section
export const GithubPage = styled.li `
  position: relative;
  padding-top: 16px;
  
  &:hover {
    ${ GithubCaret } {
      visibility: visible;
    }
    
    ${ GithubPageLinkWrapper } {
      border-left: 3px solid #fff;
    }
  }
`


/*

        INTERNAL LINKS SECTION

 */

// caret (internal page links)
export const Caret = styled(ArrowRight) `
  position: absolute;
  top: 27px;
  left: -40px;
  visibility: hidden;
`

// clear wrapper for middle item (part of vertical bar)
export const LinkWrapper = styled.div `
  border-left: 3px solid #fff;
  padding: 30px 0;
`

// list (in-site subpages)
export const SubpageLinks = styled.ul `
  list-style: none;
  text-align: left;
  position: relative;
  padding: 0;
  height: 0;
  transition: all 0.2s ease-in-out;
`

// list item (in-site subpages)
export const SubpageLink = styled.li `
  position: initial;
  padding:30px 0 0 20px;
  color: #fff;
  text-decoration: none;
  visibility: hidden;
`

// list item (in-site page list)
export const Page = styled.li `
  position:relative;
  padding: 0;

  &:hover {
    
    ${ Caret } {
      visibility: visible;
    }
    
    ${ HomeCaret } {
      visibility: visible;
    }
    
    ${ SubpageLink } {
      visibility: visible;
    }

    ${ SubpageLinks } {
      height: auto;
    }
  }
`