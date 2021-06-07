import React, { useState } from 'react'
import {
    PageContent,
    Row,
    Column_Heading_Left,
    Column_Heading_Right,
    Column_Dynamic_Equal_Height,
    Row_Header,
    Card,
    CardName,
    CardDescription,
    RepoLink
} from '../components/layout';
import {
    PageHeading,
    PageSubheading,
    Text
} from '../components/text';
import RepoImage_1 from "../media/img/stock_1.jpg"
import RepoImage_2 from "../media/img/stock_1.jpg"
import RepoImage_3 from "../media/img/stock_1.jpg"
import styled from 'styled-components'

const CloneText_1 = 'https://tiltedgames.org';
const CloneText_2 = 'https://tiltedgames.org';
const CloneText_3 = 'https://tiltedgames.org';

export const CloneTextbox = styled.textarea `
  color: #000;
  padding: 20px 0;
`

export const CopyButton = styled.button `
  text-align: center;
  color: #000;
  padding: 20px 0;
  height: 50px;
  width: 50%;
`

const Github = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

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
                    host <a style={ { color: '#fff' } } href='#'> a Discord server</a> open
                    to the public. Come say hi and see where
                    development is at!
                </Text>
            </Row>
            <Row>
                <Column_Dynamic_Equal_Height>
                    <Card>
                        <CardName>
                            Recoup
                        </CardName>
                        <CardDescription>
                            This repo hosts the Unity project and all art assets used in the making of Recoup. It also includes binaries ready to play of the current development version.
                        </CardDescription>
                        <a href='#' style={ { color: '#000' } }>
                            On Github
                        </a>
                        <br />
                        <CloneTextbox text={CloneText_1}/>
                        <CopyButton/>
                    </Card>
                </Column_Dynamic_Equal_Height>
                <Column_Dynamic_Equal_Height>
                    <Card>
                        <CardName>
                            One Click Server
                        </CardName>
                        <CardDescription>
                            This repo hosts the server that drives Recoup. Its a great starting point for making your own multiplayer game or project!
                        </CardDescription>
                        <a href='#' style={ { color: '#000' } }>
                            On Github
                        </a>
                        <br />
                        <CloneTextbox text={CloneText_2}/>
                        <CopyButton/>
                    </Card>
                </Column_Dynamic_Equal_Height>
                <Column_Dynamic_Equal_Height>
                    <Card>
                        <CardName>
                            This Website
                        </CardName>
                        <CardDescription>
                            Like the website? Check out the React project here!
                        </CardDescription>
                        <a href='#' style={ { color: '#000' } }>
                            On Github
                        </a>
                        <br />
                        <CloneTextbox text={CloneText_3}/>
                        <CopyButton />
                    </Card>
                </Column_Dynamic_Equal_Height>
            </Row>
        </PageContent>
    );
}

export default Github;