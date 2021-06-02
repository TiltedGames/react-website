import styled from 'styled-components'

export const GameContainer = styled.div `
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0;
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

export const GameBackground = styled.div `
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

export const GameContent = styled.div `
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameHeader = styled.h1 `
  width: 70vw;
  margin-left: calc(-30vw + 80px);
  color: #fff;
  font-size: 200px;
  text-align: left;
  position:fixed;
  top: 50px;
  padding-left: 0;

  @media screen and (max-width: 2048px) {
    font-size: 180px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 160px;
    width: 60vw;
    margin-left: calc(-40vw + 80px);
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
    width: 40vw;
    margin-left: calc(-60vw + 80px);
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
    width: 40vw;
    margin-left: calc(-60vw + 80px);
  }
`

export const GameP = styled.p `
  margin: 96px 0;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  padding:20px 5px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`