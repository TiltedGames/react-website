import React, { useState } from 'react'
import {
    PageContent,
    Row,
    Column_FullWidth,
    Column_Heading_Left,
    Column_Heading_Right, Column_Dynamic_Equal_Height
} from "../components/layout";
import {
    PageHeading,
    PageSubheading,
    Text
} from "../components/design";
import RepoImage_1 from "../media/img/stock_1.jpg"
import RepoImage_2 from "../media/img/stock_1.jpg"
import RepoImage_3 from "../media/img/stock_1.jpg"
import styled from 'styled-components'

/*

        CONSTANTS

*/

const CloneText_1 = 'https://tiltedgames.org';
const CloneText_2 = 'https://tiltedgames.org';
const CloneText_3 = 'https://tiltedgames.org';

/*

        GITHUB PAGE COMPONENTS

*/

export const RepoCards = styled.div `

`

export const RepoCard = styled.div `
  text-align: center;
  padding: 20px;
  background: #fff;
  margin: 5px;
  border-radius: 10px;
`

export const RepoLink = styled.a `
  color: #000;
`

export const RepoName = styled.p `
  color: #000;
  text-align: center;
  font-size: 48px;
  padding: 20px 0;
`

export const RepoDescription = styled.p `
  color: #000;
  width: 400px;
  text-align: center;
  font-size: 24px;
  padding: 20px 0;
`

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

/*

        PAGE COMPONENT

*/

const Github = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row>
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
            </Row>
            <Row>
                <Column_FullWidth>
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
                </Column_FullWidth>
            </Row>
            <RepoCards>
                <Column_Dynamic_Equal_Height>
                        <RepoCard>
                            <a
                                href='#'
                                style={ { color: '#fff'}}
                            >
                                <RepoName>Recoup</RepoName>
                            </a>
                            <RepoDescription>
                                This repo hosts the Unity project and all art assets used in the making of Recoup. It also includes binaries ready to play of the current development version.
                            </RepoDescription>
                            <CloneTextbox text={ CloneText_1 }></CloneTextbox>
                            <CopyButton></CopyButton>
                        </RepoCard>
                </Column_Dynamic_Equal_Height>
                <Column_Dynamic_Equal_Height>
                        <RepoCard>
                            <a
                                href='#'
                                style={ { color: '#fff'}}
                            >
                                <RepoName>One Click Server</RepoName>
                            </a>
                            <RepoDescription>
                                This repo hosts the server that drives Recoup. Its a great starting point for making your own multiplayer game or project!
                            </RepoDescription>
                            <CloneTextbox text={ CloneText_2 }></CloneTextbox>
                            <CopyButton></CopyButton>
                        </RepoCard>
                </Column_Dynamic_Equal_Height>
                <Column_Dynamic_Equal_Height>
                        <RepoCard>
                            <a
                                href='#'
                                style={ { color: '#fff'}}
                            >
                                <RepoName>This Website</RepoName>
                            </a>
                            <RepoDescription>
                                Like the website? Check out the React project here!
                            </RepoDescription>
                            <CloneTextbox text={ CloneText_3 }></CloneTextbox>
                            <CopyButton />
                        </RepoCard>
                </Column_Dynamic_Equal_Height>
            </RepoCards>
        </PageContent>
    );
}

export default Github;