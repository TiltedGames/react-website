import styled from 'styled-components';

export const PageHeading = styled.div `
  font-family: 'NeutralFace-Bold', sans-serif;
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
  font-family: 'NeutralFace', sans-serif;
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

export const PageSubheadingSmall = styled.p `
  font-family: 'Poppins', sans-serif;
  color: #000;
  text-align: left;
  margin: 0;
  font-weight: bold;
  padding: 0 0 0 20px;
  vertical-align: top;
  align-items: start;
  font-size: 20px;
  height: 100%;

  @media screen and (max-width: 1080px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`

export const SectionText = styled.h2 `
  font-family: 'NeutralFace-Bold', sans-serif;
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

export const Text = styled.p `
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  width: 100%;
  padding: 25px;
  max-width: calc(100% - 200px);
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`