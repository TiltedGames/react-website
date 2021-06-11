import React, { useState } from 'react'
import {
    PageContent,
    Row,
    Column_Heading_Left,
    Column_Heading_Right,
    Row_Header,
    Card_Large,
    CardName,
    CardDescription_Large, Row_LimitWidth
} from '../components/layout';
import {
    PageHeading,
    PageSubheading,
    Text
} from '../components/text';
import { FaLink } from "react-icons/all";
import styled from 'styled-components'
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

export const CopyButton = styled.button `
  text-align: center;
  color: #fff;
  padding: 20px;
  margin: 20px;
  background: #000;
  border: 1px solid #777;
  
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
                    that promotes learning and creativity.
                    For these reasons, we host our development
                    out in the open, on Github, and
                    host <a style={ { color: '#fff' } } href='https://discord.gg/nmpJZAsq'> a Discord server</a> open
                    to the public. Come say hi and see where
                    development is at!
                </Text>
            </Row>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/recoup' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>Recoup
                        </CardName>
                    </a>
                    <CardDescription_Large>
                        This repo hosts the Unity project and all art assets used in the making of Recoup. It also includes binaries ready to play of the current development version.
                    </CardDescription_Large>
                    <CopyToClipboard text='git clone https://github.com/TiltedGames/recoup.git'>
                        <CopyButton>(Click to copy) git clone https://github.com/TiltedGames/recoup.git</CopyButton>
                    </CopyToClipboard>
                </Card_Large>
            </Row_LimitWidth>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/one-click-server' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>One Click Server
                        </CardName>
                    </a>
                    <CardDescription_Large>
                        This repo hosts the server that drives Recoup. It's a great starting point for making your own multiplayer game or project!
                    </CardDescription_Large>
                    <CopyToClipboard text='git clone https://github.com/TiltedGames/one-click-server.git'>
                        <CopyButton>(Click to copy) git clone https://github.com/TiltedGames/one-click-server.git</CopyButton>
                    </CopyToClipboard>
                </Card_Large>
            </Row_LimitWidth>
            <Row_LimitWidth>
                <Card_Large>
                    <a href='https://github.com/TiltedGames/react-website' style={ { color: '#000', textDecoration: 'none' } }>
                        <CardName>
                            <FaLink size={ 24 } style={ { marginRight: '15px' } }/>This Website
                        </CardName>
                    </a>
                    <CardDescription_Large>
                        Like the website? Check out the React project here!
                    </CardDescription_Large>
                    <CopyToClipboard text='git clone https://github.com/TiltedGames/react-website.git'>
                        <CopyButton>(Click to copy) git clone https://github.com/TiltedGames/react-website.git</CopyButton>
                    </CopyToClipboard>
                </Card_Large>
            </Row_LimitWidth>
        </PageContent>
    );
}

export default Github;