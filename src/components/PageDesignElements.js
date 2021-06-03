import styled from "styled-components";
//import Video from '../../video/video.mp4'   // import background video

export const PageHeading = styled.div `
  font-family: 'NeutralFace';
  color: #fff;
  font-size: 120px;
  text-align: right;
  margin: 0;
  font-weight: bold;
  padding: 0 20px 0 0;

  @media screen and (max-width: 2048px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const PageSubheading = styled.h1 `
  font-family: 'Poppins', sans-serif;
  color: #000;
  text-align: left;
  margin: 0;
  font-weight: bold;
  padding: 0 0 0 20px;

  font-size: 100px;

  @media screen and (max-width: 2048px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const SectionHeading = styled.h1 `
  font-family: 'NeutralFace';
  color: #000;
  background: #fff;
  text-align: center;
  margin: 0;
  padding: 25px;
  font-weight: bold;

  font-size: 100px;

  @media screen and (max-width: 2048px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`



export const BoldText = styled.p `
  font-size: 26px;
  text-align: left;
  margin: 0;
  font-weight: bold;
  background: #000;
  color: #fff;
  width: 100%;
  padding: 75px 25px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`