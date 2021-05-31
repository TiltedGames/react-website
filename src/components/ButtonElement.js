import styled from 'styled-components'
import { Link } from 'react-scroll'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/all";

const lightButtonBG = '#0c0f38';
const lightButtonText = '#fdd430';
const lightButtonHoverBG = '#fdd430';
const lightButtonHoverText = '#0c0f38';

const darkButtonBG = '#fff';
const darkButtonText = '#0c0f38';
const darkButtonHoverBG = '#0c0f38';
const darkButtonHoverText = '#fff';

const bigButtonPadding = '14px 48px';
const smallButtonPadding = '12px 30px';

const bigFontSize = '20px';
const smallFontSize = '16px';

export const Button = styled(Link) `
  background: ${({ light }) => (light ? darkButtonBG : lightButtonBG)};
  color:${({ light }) => (light ? darkButtonText : lightButtonText)};
  padding: ${({ big }) => (big ? bigButtonPadding : smallButtonPadding)};
  font-size: ${({ big }) => (big ? bigFontSize : smallFontSize)};
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ light }) => (light ? darkButtonHoverBG : lightButtonHoverBG)};
    color:${({ light }) => (light ? darkButtonHoverText : lightButtonHoverText)};
  }
`

export const GameButtonWrapper = styled.div `
  position: fixed;
  bottom: 10vh;
`

export const ArrowForward = styled(MdArrowForward) `
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight) `
  margin-left: 8px;
  font-size: 20px;
`

export const DownloadButton = styled.div `
  background: ${({ light }) => (light ? darkButtonBG : lightButtonBG)};
  color:${({ light }) => (light ? darkButtonText : lightButtonText)};
  padding: ${({ big }) => (big ? bigButtonPadding : smallButtonPadding)};
  font-size: ${({ big }) => (big ? bigFontSize : smallFontSize)};
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ light }) => (light ? darkButtonHoverBG : lightButtonHoverBG)};
    color:${({ light }) => (light ? darkButtonHoverText : lightButtonHoverText)};
  }
`

export const OSIcons = styled.ul `
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding:0;
  height:100%;
  margin:0;
  background: #fff;
  align-items: center;
  list-style: none;
  text-align: center;
`

export const OSIcon = styled.li `
  display:inline-flex;
  height:100%;
  margin:10px;
  padding:10px;
  color: #0c0f38;
  
  &:hover {
    background: #0c0f38;
    color:#ddd;
  }
`

// create styled list that pops out on button click

// image links are hard coded