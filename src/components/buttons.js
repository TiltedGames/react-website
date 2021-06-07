import styled from 'styled-components'
import {
    FaWindows,
    FaApple,
    FaLinux,
    MdArrowForward,
    FaTimesCircle
} from 'react-icons/all';

const buttonBG = '#fff';
const buttonText = '#000';

const downloadButtonBg = '#fff';
const downloadButtonText = '#000';

const bigButtonPadding = '14px 48px';
const smallButtonPadding = '12px 30px';

const bigFontSize = '20px';
const smallFontSize = '16px';

const osIconsBg = '#fff';
const osIconsColor = '#000';

export const ArrowForward = styled(MdArrowForward) `
  margin-left: 8px;
  font-size: 20px;
`

export const DownloadButtons = styled.ul `
  justify-content: space-around;
  z-index: 1;
  height: 120px;
  min-height:90px;
  align-items: center;
  list-style: none;
  text-align: center;
  display: flex;
  transition: all 0.2s ease-in-out;
  background: ${ osIconsBg };
  width: min-content;
  padding: 40px 0;
  margin: 50px auto;
`

export const WinIcon = styled(FaWindows) `
  color: ${ osIconsColor };
`

export const MacIcon = styled(FaApple) `
  color: ${ osIconsColor };
`

export const LinIcon = styled(FaLinux) `
  color: ${ osIconsColor };
`

export const WindowsButton = styled.li `
  display: inline-flex;
  align-items: center;
  width: min-content;
  margin: 0 50px;
  background: ${ osIconsBg };
`

export const MacButton = styled.li `
  display:inline-flex;
  align-items: center;
  background: ${ osIconsBg };
  margin: 0 50px;
  width: min-content;
`

export const LinuxButton = styled.li `
  display:inline-flex;
  align-items: center;
  background: ${ osIconsBg };
  margin: 0 50px;
  width: min-content;
`

export const Button = styled.div `
  color: ${ downloadButtonText };
  background: ${ downloadButtonBg };
  padding: ${ ({ big }) => (big ? bigButtonPadding : smallButtonPadding) };
  font-size: ${ ({ big }) => (big ? bigFontSize : smallFontSize) };
  white-space: nowrap;
  outline: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  min-height:90px;
`

export const ButtonWrapper = styled.div `
  margin: 30px auto;
  z-index: 100;
`

export const SendButton = styled.div `
  background: ${ buttonBG }
  color: ${ buttonText }
  padding: ${ ({ big }) => (big ? bigButtonPadding : smallButtonPadding) };
  font-size: ${ ({ big }) => (big ? bigFontSize : smallFontSize) };
  white-space: nowrap;
  outline: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    text-decoration: underline;
  }
`

export const Carousel_L_R = styled.div `
  appearance: none;
  background: transparent;
  border: none;
  color: white;
  position: absolute;
  font-size: 20rem;
  width: 20rem;
  height: 20rem;
  top: 2%;
  transition: opacity 0.3s;
  opacity: 0.7;
  z-index: 5;

  @media screen and (max-width: 1440px) {
    top: 3%;
  }

  @media screen and (max-height: 1080px) {
    top: 15%;
    font-size: 10rem;
    width: 15rem;
    height: 10rem;
  }

  @media screen and (max-height: 480px) {
    top: 20%;
    font-size: 5rem;
    width: 10rem;
    height: 5rem;
  }

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    left: -50%;
  }

  &:last-child {
    right: -50%;
  }
`