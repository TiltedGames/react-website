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
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 100px;
  
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
  padding-right: 100px;
  
  :after {
    content: '';
    display: table;
    clear: both;
    box-sizing: border-box;
  }
`

export const Column_Heading_Left = styled.div `
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
  background: #fff;
  width: 75%;
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
  padding: 25px 25px 25px 0;
  vertical-align: center;
  align-items: center;
`

export const Column_Dynamic_Equal_Height = styled.div `
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
  padding: 25px;
  float: left;
`

export const Column_Dynamic = styled.div `
  float: left;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Card = styled.div `
  text-align: center;
  padding: 20px;
  background: #fff;
  margin: 5px;
  border-radius: 10px;
`

export const RepoLink = styled.a `
  color: #000;
`

export const CardName = styled.p `
  color: #000;
  text-align: center;
  font-size: 32px;
  padding: 20px 0;
`

export const CardDescription = styled.p `
  color: #000;
  width: 400px;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
`
