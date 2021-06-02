import styled from 'styled-components'
import aboutBg from '../../img/stock_1.jpg'

export const AboutContainer = styled.div `
  margin-left: 75px;
  max-width: calc(85vw - 75px);
  padding: 0;
  position: relative;
  z-index: 1;
  

  :after {
    content: "";
    display: table;
    clear: both;
  }
`

export const Column_Dynamic = styled.div `
  float: left;
  width: 40vw;
`

export const Column_FullWidth = styled.div `

`

export const AboutHeader = styled.div `
  font-family: 'NeutralFace';
  color: #fff;
  font-size: 160px;
  text-align: right;
  padding: 0;
  margin: 0;
  font-weight: bold;
  
  @media screen and (max-width: 2048px) {
    font-size: 120px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 90px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`

export const AboutInfo = styled.div `
  padding: 30px 0;
`

export const AboutSubheader = styled.h1 `
  font-size: 100px;
  text-align: left;
  margin: 0;
  background: #fff;
  color: #000;
  
  @media screen and (max-width: 2048px) {
    font-size: 90px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 80px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`

export const AboutP = styled.p `
  font-size: 48px;
  text-align: left;
  margin: 0;
  font-weight: bold;
  background: #000;
  color: #fff;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`