import React, { useState } from 'react'
import {
    PageContent,
    Row,
    Column_Heading_Left,
    Column_Heading_Right,
    Row_Header,
    Card_Large,
    CardName_Small,
    CardDescription_Large, Row_LimitWidth, CardName_Large
} from '../components/layout';
import {
    PageHeading,
    PageSubheading,
    Text
} from '../components/text';
import {FaArrowDown, FaLink} from "react-icons/all";
import styled from 'styled-components'
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

export const CopyButton = styled.button `
  text-align: center;
  color: #fff;
  padding: 20px;
  margin: 20px 0;
  background: #000;
  border: 0;
  width: 100%;
  transition: all 0.1s ease-in-out;
  border-left: 1px solid #000;
  border-right: 1px solid #000;

  &:hover {
    border-left: 1px solid #777;
    border-right: 1px solid #777;
  }
`

export const DownArrow = styled(FaArrowDown) `
  width: 12px;
  height: 12px;
  margin: 0 10px;
`

const Github = () => {

    return (
        <PageContent id='github'>
            <Row_Header>
                <Column_Heading_Left>
                    <PageHeading>
                        On Github
                    </PageHeading>
                </Column_Heading_Left>
                <Column_Heading_Right>
                    <PageSubheading>
                        We proudly develop open-source software
                    </PageSubheading>
                </Column_Heading_Right>
            </Row_Header>
            <Row>
                <Text>
                    Great software begins with great people.
                    Our goal is not just to create games,
                    but to foster an open environment
                    that promotes learning and creativity.<br /><br />
                    For these reasons we host our development
                    out in the open, on Github, and
                    host <a style={ { color: '#fff' } } href='https://discord.gg/nmpJZAsq'> a Discord server</a> open
                    to the public.
                </Text>
            </Row>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName_Large>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>Tilted Games Home
                        </CardName_Large>
                    </a>
                </Card_Large>
            </Row_LimitWidth>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/recoup' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName_Large>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>Recoup
                        </CardName_Large>
                    </a>
                    <CardDescription_Large>
                        This repo hosts the Unity project and all art assets used in the making of Recoup. It also includes binaries ready to play of the current development version.
                    </CardDescription_Large>
                    <CopyToClipboard text='git clone https://github.com/TiltedGames/recoup.git'>
                        <CopyButton>Click to copy<DownArrow /><br /><br />git clone https://github.com/TiltedGames/recoup.git</CopyButton>
                    </CopyToClipboard>
                </Card_Large>
            </Row_LimitWidth>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/one-click-server' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName_Large>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>One Click Server
                        </CardName_Large>
                    </a>
                    <CardDescription_Large>
                        This repo hosts the server that drives Recoup. It's a great starting point for making your own multiplayer game or project!
                    </CardDescription_Large>
                    <CopyToClipboard text='git clone https://github.com/TiltedGames/one-click-server.git'>
                        <CopyButton>Click to copy<DownArrow /><br /><br />git clone https://github.com/TiltedGames/one-click-server.git</CopyButton>
                    </CopyToClipboard>
                </Card_Large>
            </Row_LimitWidth>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/react-website' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName_Large>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>This Website
                        </CardName_Large>
                    </a>
                    <CardDescription_Large>
                        Like the website? Check out the React project here!
                    </CardDescription_Large>
                    <CopyToClipboard text='git clone https://github.com/TiltedGames/react-website.git'>
                        <CopyButton>Click to copy<DownArrow /><br /><br />git clone https://github.com/TiltedGames/react-website.git</CopyButton>
                    </CopyToClipboard>
                </Card_Large>
            </Row_LimitWidth>
        </PageContent>
    );
}

export default Github;