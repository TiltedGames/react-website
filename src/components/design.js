import styled from "styled-components";

export const PageHeading = styled.div `
  font-family: 'NeutralFace-Bold';
  color: #fff;
  font-size: 50px;
  text-align: right;
  margin: 0;
  font-weight: bold;
  padding: 0 20px 0 0;

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
  font-family: 'NeutralFace';
  color: #000;
  text-align: left;
  margin: 0;
  font-weight: bold;
  padding: 0 0 0 20px;
  vertical-align: center;
  align-items: center;
  font-size: 35px;
  height: 100%;

  @media screen and (max-width: 1080px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export const SectionHeading = styled.h1 `
  font-family: 'NeutralFace';
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 25px;
  font-weight: bold;
  vertical-align: center;
  align-items: center;
  font-size: 100px;
  height: 100%;

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

export const DownloadText = styled.h2 `
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: center;
  margin: 100px 0 0 0;
  padding: 25px;
  font-weight: bold;
  align-items: center;

  font-size: 60px;

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
  margin: 0 0 0 100px;
  color: #fff;
  width: 100%;
  padding: 75px 25px;
  max-width: calc(100% - 200px);
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`