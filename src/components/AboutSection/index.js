import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    AboutHeader,
    AboutP,
    AboutSubheader
} from "./AboutSectionElements";
import {
    PageContent,
    Row_Header,
    Row_Content,
    Column_HalfWidth,
    Column_FullWidth,
    Column_Dynamic, Column_Header_Left, Column_Header_Right
} from "../PageLayoutElements";

const AboutSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <PageContent>
            <Row_Header>
            <Column_Header_Left>
                <AboutHeader>
                    We are <br />Tilted<br /> Games
                </AboutHeader>
            </Column_Header_Left>
                <Column_Header_Right>
                    <AboutSubheader>
                        Passionate artists, creators, developers, and engineers
                    </AboutSubheader>
                </Column_Header_Right>
            </Row_Header>
            <Row_Content>
                <Column_Dynamic>
                    <AboutP>
                        And we're looking to bring a new and exciting experience to you! We're working on a game named Recoup. At the moment, all of our software is open source, covered by the MIT license.
                    </AboutP>
                </Column_Dynamic>
            </Row_Content>
        </PageContent>
    );
}

export default AboutSection;