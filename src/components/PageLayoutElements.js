import styled from "styled-components";

export const PageContent = styled.div `
  max-width: calc(85vw - 75px);
  padding: 0;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`

export const Row_Header = styled.div `
  display: table;
  box-sizing: border-box;

`

export const Row_Content = styled.div `
  :after {
    content: "";
    display: table;
    clear: both;
    box-sizing: border-box;
  }
`

export const Column_Dynamic = styled.div `
  float: left;
  width: 50%;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Column_Header_Left = styled.div `
  width: 30%;
  box-sizing: border-box;
  height: 100%;
  display: table-cell;
`

export const Column_Header_Right = styled.div `
  background: #fff;
  width: 60%;
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
`



export const Column_HalfWidth = styled.div `
  float: left;
  width: 40%;
  box-sizing: border-box;
`

export const Column_FullWidth = styled.div `
  float: left;
  width: 100%;
  box-sizing: border-box;
`