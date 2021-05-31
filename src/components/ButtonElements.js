import styled from 'styled-components'
import { Link } from 'react-scroll'
import {
    FaWindows,
    FaApple,
    FaLinux,
    MdKeyboardArrowDown,
    MdArrowForward,
    MdKeyboardArrowRight
} from "react-icons/all";

const buttonBG = '#fff';
const buttonText = '#000';
const buttonHoverBG = '#fff';
const buttonHoverText = '#000';

const downloadButtonBg = '#fff';
const downloadButtonText = '#000';
const downloadButtonHoverBg = '#fff';
const downloadButtonHoverText = '#000';

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
  padding:10px;
  height:100%;
  margin:0;
  background: ${ osIconsBg };
  align-items: center;
  list-style: none;
  text-align: center;
  display: flex;
  visibility: hidden;
`

export const WinIcon = styled(FaWindows) `
  margin: 10px;
  padding: 5px;
  color: ${ osIconsColor };
`

export const MacIcon = styled(FaApple) `
  margin:10px;
  padding:5px;
  color: ${ osIconsColor };
`

export const LinIcon = styled(FaLinux) `
  margin:10px;
  padding:5px;
  color: ${ osIconsColor };
`

export const WinIconWrapper = styled.li `
  display:inline-flex;
  height: 100%;

  &:hover {
    background: ${ osIconsHoverBg };

    ${ WinIcon } {
      color: ${ osIconsHoverColor };
    }
  }
`

export const MacIconWrapper = styled.li `
  display:inline-flex;
  height: 100%;

  &:hover {
    background: ${ osIconsHoverBg };

    ${ MacIcon } {
      color: ${ osIconsHoverColor };
    }
  }
`

export const LinIconWrapper = styled.li `
  display:inline-flex;
  height: 100%;

  &:hover {
    background: ${ osIconsHoverBg };
    
    ${ LinIcon } {
      color: ${ osIconsHoverColor };
    }
  }
`

// download button for game section, expands with OS icons
export const DownloadButton = styled.div `
  color: ${ downloadButtonText };
  background: ${ downloadButtonBg };
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

    ${ DownloadButton } {
      background: ${ downloadButtonHoverBg };
      color: ${ downloadButtonHoverText };
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

/*

        END SECTION: CONTACT FORM BUTTONS

 */