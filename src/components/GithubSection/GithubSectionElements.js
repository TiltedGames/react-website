import styled from 'styled-components'
import GithubBg from '../../img/stock_1.jpg'

export const GithubHeader = styled.div `
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

export const GithubSubheader = styled.h1 `
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

export const GithubP = styled.p `
  font-size: 36px;
  text-align: left;
  margin: 0;
  font-weight: bold;
  background: #000;
  color: #fff;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`