import styled from 'styled-components';

export const PageContent = styled.div `
  max-width: calc(100vw - 200px);
  padding: 25px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  min-height: 100vh;
  margin-bottom: 300px;
`

export const Row = styled.div `
  text-align: center;
  
  :after {
    content: '';
    display: table;
    clear: both;
    box-sizing: border-box;
  }
`

export const Row_LimitWidth = styled.div `
  text-align: center;

  :after {
    content: '';
    display: table;
    clear: both;
    box-sizing: border-box;
  }
`

export const Row_Header = styled.div `
  max-width: 1200px;
  margin: 0 auto 100px auto;
  background: #fff;
  
  :after {
    content: '';
    display: table;
    clear: both;
    box-sizing: border-box;
  }
`

export const Column_Heading_Left = styled.div `
  background: #000;
  width: 25%;
  box-sizing: border-box;
  height: 100%;
  display: table-cell;
  padding: 25px 0 25px 25px;
  vertical-align: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
`

export const Column_Heading_Right = styled.div `
  width: 75%;
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
  padding: 30px 25px 30px 0;
  vertical-align: top;
  align-items: start;
`

export const Column_Dynamic_Equal_Height = styled.div `
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
  padding: 25px;
  float: left;
`

export const Column_Dynamic = styled.div `
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
  padding: 25px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Card_Large = styled.div `
  text-align: center;
  margin: 100px auto 0 auto;
  width: 75%;
  min-width: 500px;
  max-width: 1000px;
`

export const Card_Small = styled.div `
  text-align: center;
  float: left;
  max-width: 40%;
  margin: 20px;
`

export const RepoLink = styled.a `
  color: #ddd;
`

export const CardName = styled.p `
  font-family: NeutralFace-Bold, sans-serif;
  color: #ddd;
  border: 1px solid #ddd;
  background: transparent;
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
`

export const CardDescription_Large = styled.p `
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 30px;
`

export const CardDescription_Small = styled.p `
  background: #ddd;
  color: #000;
  text-align: center;
  font-size: 18px;
  padding: 30px;
`
