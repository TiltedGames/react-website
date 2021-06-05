import React, { useState } from 'react'
import {
    PageContent,
    Row_EqualHeights,
    Row,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic,
    Column_Heading_Left,
    Column_Heading_Right, Column_Dynamic_Equal_Height
} from "../components/layout";
import {
    PageHeading,
    PageSubheading,
    BoldText
} from "../components/design";
import {
    RepoCards,
    RepoCard,
    RepoLink,
    RepoName,
    RepoDescription,
    CloneTextbox,
    CopyButton
} from "../components/github";
import RepoImage_1 from "../media/img/stock_1.jpg"
import RepoImage_2 from "../media/img/stock_1.jpg"
import RepoImage_3 from "../media/img/stock_1.jpg"


const CloneText_1 = 'https://tiltedgames.org';
const CloneText_2 = 'https://tiltedgames.org';
const CloneText_3 = 'https://tiltedgames.org';

const GithubSection = () => {

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
                        We proudly support open-source
                        software. Access ours on Github, for free!
                    </PageSubheading>
                </Column_Heading_Right>
            </Row>
            <Row>
                <Column_FullWidth>
                    <BoldText>
                        Great software begins with great people.
                        Our goal is not just to create games,
                        but to foster an open environment
                        conducive to learning and creativity.
                        For this reason, we host our development
                        out in the open, on Github, and
                        host <a style={ { color: '#fff' } } href='#'> a Discord server</a> open
                        to the public. Come say hi and see where
                        development is at!
                    </BoldText>
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

export default GithubSection;