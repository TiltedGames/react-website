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
  color: #fff;
  font-size: 48px;
  text-align: center;
  position:fixed;
  top: 10vh;
  padding:10px 10px;
  border:1px solid #ddd;
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
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