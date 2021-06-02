import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    AboutContainer,
    AboutBackground,
    VideoBackground,
    AboutHeader,
    AboutContent,
    AboutP,
    AboutSubheader,
    AboutInfo
} from "./AboutSectionElements";

const AboutSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer>
            <AboutContent>
                <AboutHeader>
                    We are Tilted Games
                </AboutHeader>
                <AboutInfo>
                    <AboutSubheader>
                        A small team of passionate game developers, artists, and engineers
                    </AboutSubheader>
                    <AboutP>
                        And we're looking to bring a new and exciting experience to you! We're working on a game named Recoup. At the moment, all of our software is open source, covered by the MIT license.
                    </AboutP>
                </AboutInfo>
            </AboutContent>
        </AboutContainer>
    );
}

export default AboutSection;