import styled from 'styled-components'
import { Link } from 'react-scroll'

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