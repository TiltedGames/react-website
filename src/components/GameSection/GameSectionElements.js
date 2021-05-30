import styled from 'styled-components'

export const GameContainer = styled.div `
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin:0;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;
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
  backgroundPosition: center;
  backgroundSize: cover;
  backgroundRepeat: no-repeat;
  width: 100vw;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  
  background: #282828;
`