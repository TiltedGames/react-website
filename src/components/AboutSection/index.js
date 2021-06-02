import React, { useState } from 'react'
import Video from '../../video/video.mp4'   // import background video
// import game section elements
import {
    AboutContainer,
    AboutHeader,
    AboutContent,
    AboutP,
    AboutSubheader,
    AboutInfo, Column_Dynamic
} from "./AboutSectionElements";

const AboutSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer>
            <Column_Dynamic>
                <AboutHeader>
                    We are Tilted Games
                </AboutHeader>
            </Column_Dynamic>
            <Column_Dynamic>
                    <AboutSubheader>
                        A small team of passionate game developers, artists, and engineers
                    </AboutSubheader>
            </Column_Dynamic>
            <Column_Dynamic>
                    <AboutP>
                        And we're looking to bring a new and exciting experience to you! We're working on a game named Recoup. At the moment, all of our software is open source, covered by the MIT license.
                    </AboutP>
            </Column_Dynamic>
        </AboutContainer>
    );
}

export default AboutSection;