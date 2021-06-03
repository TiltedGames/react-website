import styled from "styled-components";

export const PageContent = styled.div `
  max-width: calc(85vw - 75px);
  padding: 0;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`

// one row should be about the width of a page
// however, this will allow overflow to safely occur
// new elements are pushed to the highest free available
// height, under elements in this row
// (note) for equal-height cells, use display: table-cell
// property in column div for ALL columns in row
export const Row = styled.div `
  :after {
    content: "";
    display: table;
    clear: both;
    box-sizing: border-box;
  }
`

export const Column_Header_Left = styled.div `
  width: 30%;
  box-sizing: border-box;
  height: 100%;
  display: table-cell;
  padding: 25px 0 25px 25px;
`

export const Column_Header_Right = styled.div `
  background: #fff;
  width: 60%;
  box-sizing: border-box;
  display: table-cell;
  height: 100%;
  padding: 25px 25px 25px 0;
`

export const Column_Dynamic = styled.div `
  float: left;
  width: 50%;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
  text-align: center;
  padding: 25px;
`