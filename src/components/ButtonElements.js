import styled from 'styled-components'
import { Link } from 'react-scroll'
import {
    FaWindows,
    FaApple,
    FaLinux, MdArrowDropDown, MdKeyboardArrowDown
} from "react-icons/all";
import {
    MdArrowForward,
    MdKeyboardArrowRight
} from "react-icons/all";

const buttonBG = '#fff';
const buttonText = '#000';
const buttonHoverBG = '#fff';
const buttonHoverText = '#000';

const bigButtonPadding = '14px 48px';
const smallButtonPadding = '12px 30px';

const bigFontSize = '20px';
const smallFontSize = '16px';

const osIconsBg = '#fff';
const osIconsColor = '#000';
const osIconsHoverBg = '#000';
const osIconsHoverColor = '#fff';

/*

        BEGIN SECTION: ALL BUTTONS

 */

// for all buttons, sets button heights to 10% of the visible viewport (10vh)
export const ButtonWrapper = styled.div `
  position: fixed;
  bottom: 10vh;
`

// forward arrow icon
export const ArrowForward = styled(MdArrowForward) `
  margin-left: 8px;
  font-size: 20px;
`

// right arrow icon
export const ArrowRight = styled(MdKeyboardArrowRight) `
  margin-left: 8px;
  font-size: 20px;
`


// down arrow icon
export const ArrowDown = styled(MdKeyboardArrowDown) `
  margin-left: 8px;
  font-size: 20px;
`

/*

        END SECTION: ALL BUTTONS

        BEGIN SECTION: GAME DOWNLOAD BUTTONS

 */

export const OSIcons = styled.ul `
  justify-content: space-between;
  z-index: 1;
  padding:0;
  height:100%;
  margin:0;
  background: ${ osIconsBg }
  align-items: center;
  list-style: none;
  text-align: center;
  background: #fff;
  display: flex;
  visibility: hidden;
`

export const OSIcon = styled.li `
  display:inline-flex;
  height: 100%;
`

export const WinIcon = styled(FaWindows) `
  margin: 10px;
  padding: 10px;
  background: transparent;
  color: #000;
  
  &:hover {
    background: #000;
    color:#fff;
  }
`

export const MacIcon = styled(FaApple) `
  margin:10px;
  padding:10px;
  background: transparent;
  color: #000;
  
  &:hover {
    background: #000;
    color:#fff;
  }
`

export const LinIcon = styled(FaLinux) `
  margin:10px;
  padding:10px;
  background: transparent;
  color: #000;
  
  &:hover {
    background: #000;
    color:#fff;
  }
`

// download button for game section, expands with OS icons
export const DownloadButton = styled.div `
  background: #fff;
  color: #000;
  padding: ${ ({ big }) => (big ? bigButtonPadding : smallButtonPadding) };
  font-size: ${ ({ big }) => (big ? bigFontSize : smallFontSize) };
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`

// for all buttons, sets button heights to 10% of the visible viewport (10vh)
export const DownloadButtonWrapper = styled.div `
  position: fixed;
  bottom: 10vh;
  
  &:hover {
    ${ OSIcons } {
      visibility: visible;
    }
  }
`

/*

        END SECTION: GAME DOWNLOAD BUTTONS

        BEGIN SECTION: CONTACT FORM BUTTONS

 */

export const SendButton = styled.div `
  background: ${ buttonBG }
  color: ${ buttonText }
  padding: ${ ({ big }) => (big ? bigButtonPadding : smallButtonPadding) };
  font-size: ${ ({ big }) => (big ? bigFontSize : smallFontSize) };
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
    background: ${ buttonHoverBG }
    color: ${ buttonHoverText }
  }
`

// create styled list that pops out on button click

// image links are hard coded