import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import Github section elements
import {
    GithubHeader,
    GithubP,
    GithubSubheader
} from "./GithubSectionElements";
import {
    PageContent,
    Row_Header,
    Row_Content,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic,
    Column_Header_Left,
    Column_Header_Right
} from "../PageLayoutElements";

const GithubSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row_Header>
                <Column_Header_Left>
                    <GithubHeader>
                        We are <br />Tilted<br /> Games
                    </GithubHeader>
                </Column_Header_Left>
                <Column_Header_Right>
                    <GithubSubheader>
                        Passionate artists, creators, developers, and engineers
                    </GithubSubheader>
                </Column_Header_Right>
            </Row_Header>
            <Row_Content>
                <Column_Dynamic>
                    <GithubP>
                        And we're looking to bring a new and exciting experience to you! We're working on a game named Recoup. At the moment, all of our software is open source, covered by the MIT license.
                    </GithubP>
                </Column_Dynamic>
            </Row_Content>
        </PageContent>
    );
}

export default GithubSection;