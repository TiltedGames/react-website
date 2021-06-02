import styled from 'styled-components'

export const AboutContainer = styled.div `
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100vh;
  position: relative;
  z-index: 1;
  
  :before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 2;
  }
`

export const AboutBackground = styled.div `
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBackground = styled.video `
  width: 100vw;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #282828;
`

export const AboutContent = styled.div `
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 80px;
  left: 80px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`

export const AboutHeader = styled.h1 `
  width: 70vw;
  color: #fff;
  font-size: 200px;
  text-align: left;
  padding-left: 0;
  
  @media screen and (max-width: 2048px) {
    font-size: 180px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 160px;
    width: 60vw;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 60px;
    width: 40vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
    width: 40vw;
  }
`

export const AboutSubheader = styled.h1 `
  width: 70vw;
  color: #fff;
  font-size: 100px;
  text-align: left;
  margin-top: 96px;
  
  @media screen and (max-width: 2048px) {
    font-size: 90px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 80px;
    width: 60vw;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
    width: 40vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    width: 40vw;
  }
`

export const AboutP = styled.p `
  margin-top: 250px;
  color: #fff;
  font-size: 36px;
  text-align: right;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`