import styled from 'styled-components'
//import { NavLink as LinkRouter } from 'react-router-dom'
//import { Link as LinkScroll } from 'react-scroll'
import roundLogo from '../../img/round-logo.png';
import {
    FaArrowRight,
    FaPlus,
    FaGithub,
    FaDonate
} from "react-icons/all";
import {
    ArrowForward,
    ArrowRight
} from "../ButtonElements";
import {useState} from "react";

/*

        IMAGE COMPONENTS

 */

// round Tilted Games logo
export const RoundLogo = styled.span  `
  position: absolute;
  top: 0;
  left: -22px;
  background: url(${ roundLogo }) no-repeat;
  background-size: cover;
  height: 48px;
  width: 48px;
  margin-top: -16px;
`


// Github icon (from fontawesome)
export const GithubIcon = styled(FaGithub) `
  position: absolute;
  margin: 16px 0;
  top: -16px;
  left: -23px;
  height: 48px;
  width: 48px;
  border: 3px solid #fff;
  border-radius: 100px;
`

// Github icon (from fontawesome)
export const DonateIcon = styled(FaDonate) `
  position: absolute;
  top: -6px;
  left: -23px;
`

// mobile menu display icon
export const MobileIcon = styled.div `
  // hidden by default
  display:none;
  
  // show if narrow device/viewport
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

/*

        NAVIGATION COMPONENTS

 */

// wrapper (clear, controls placement)
export const Wrapper = styled.div `
  z-index: 1000;
  right: 50px;
  top: 80px;
  color: #fff;

  position:fixed;
`

// list (all pages)
export const Pages = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  position: relative;
  transition: all 0.25s ease-in-out;
`

// label (all links)
export const Label = styled.label `
  padding-left: 40px;
  text-align: left;
  color: #fff;
`

export const GithubContainer = styled.div `
  transition: all 0.25s ease-in-out;
`

// list item (of in-site page list)
export const Page = styled.li `
  position: relative;
  padding: 0;
`

// clear wrapper (part of vertical bar)
export const LinkWrapper = styled.div `
  border-left: 3px solid #fff;
  padding: 25px 0;
`

// in-site subpage list
export const SubpageLinks = styled.ul `
  list-style: none;
  text-align: left;
  position: relative;
  padding: 0;
  transition: all 0.25s ease-in-out;
`


// list item (of in-site subpages)
export const SubpageLink = styled.li `
  position: initial;
  padding: 0 0 0 20px;
  color: #fff;
  text-decoration: none;
  //padding: 30px 0 0 20px;
  transition: all 0.25s ease-in-out;
  visibility: hidden;
  height: 0;
`

// caret (for internal page links)
export const Caret = styled(FaPlus) `
  position: absolute;
  top: 32px;
  left: -40px;
  visibility: hidden;
  width:10px;
  height:10px;
`