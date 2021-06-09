import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from "styled-components";

export const CloneTextbox = styled.div `
  color: #000;
  padding: 20px;
  margin: 0;
  background: #eee;
  border: 1px solid #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
  
  :hover {
    width: auto;
  }
`

export const CopyButton = styled.button `
  text-align: center;
  color: #000;
  padding: 20px 0;
  height: 50px;
  width: 50%;
`

class TextCopy extends React.Component {
    state = {
        value: '',
        copied: false,
    };

    render() {
        return (
            <CloneTextbox>
                <input value={this.state.value}
                       onChange={({target: {value}}) => this.setState({value, copied: false})}/>

                <CopyToClipboard text={this.state.value}
                                 onCopy={() => this.setState({copied: true})}>
                    <span>Copy to clipboard with span</span>
                </CopyToClipboard>

                <CopyToClipboard text={this.state.value}
                                 onCopy={() => this.setState({copied: true})}>
                    <CopyButton>Copy to clipboard with button</CopyButton>
                </CopyToClipboard>

                {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            </CloneTextbox>
        );
    }
}