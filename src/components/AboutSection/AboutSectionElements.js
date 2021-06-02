import styled from 'styled-components'
import aboutBg from '../../img/stock_1.jpg'

export const AboutContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  z-index: 1;
`

export const AboutBackground = styled.div `
  width: inherit;
  height: inherit;
  overflow: hidden;
`

export const VideoBackground = styled.video `
  z-index: -1000;
  position: absolute;
  width: 100vw;
  margin-left: -40px;
  height: inherit;
  overflow: hidden;
  background: #282828;
`

export const AboutContent = styled.div `
  z-index: 3;
  max-width: 70vw;
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
`

export const AboutHeader = styled.span `
  color: #fff;
  font-size: 200px;
  text-align: left;
  padding: 0;
  margin-bottom: 60px;
  
  @media screen and (max-width: 2048px) {
    font-size: 180px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 160px;
    max-width: 60vw;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 60px;
    max-width: 40vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
    max-width: 40vw;
  }
`

export const AboutInfo = styled.div `
  max-width: 70vw;
  padding:30px;
  height: min-content;
  background: url(${ aboutBg }) no-repeat;

  @media screen and (max-width: 1080px) {
    max-width: 60vw;
  }

  @media screen and (max-width: 768px) {
    max-width: 40vw;
  }

  @media screen and (max-width: 480px) {
    max-width: 40vw;
  }
`

export const AboutSubheader = styled.h1 `
  color: #000;
  font-size: 100px;
  text-align: left;
  padding: 60px 0;
  
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
  margin-top: 250px;
  color: #000;
  font-size: 48px;
  text-align: left;
  padding: 0;
  
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`